import os
import logging
import time
import unicodedata
import graphyte


from selenium import webdriver
from bs4 import BeautifulSoup


logging.getLogger().setLevel(logging.INFO)
BASE_URL = 'https://soccer365.ru/games/1366173/'
GRAPHITE_HOST = 'graphite'


def parse_coeffs(page):
    coeffs = page.findAll('span', {'class': 'koeff'})
    currencies_data = []

    first =  float(coeffs[0].text)
    draw =  float(coeffs[1].text)
    second =  float(coeffs[2].text)
    print(first, second, draw)
    
    currencies_data.append(('First', first))
    currencies_data.append(('Draw', draw))
    currencies_data.append(('Second', second))


    return currencies_data


def send_metrics(currencies_data):
    sender = graphyte.Sender(GRAPHITE_HOST, prefix='currency')
    for currency in currencies_data:
        sender.send(currency[0], currency[1])


def main():

    driver = webdriver.Remote(
        command_executor='http://selenium:4444/wd/hub',
        desired_capabilities={'browserName': 'chrome', 'javascriptEnabled': True}
    )

    driver.get(BASE_URL)
    time.sleep(5)
    html = driver.page_source
    soup = BeautifulSoup(html, 'html.parser')

    metric = parse_coeffs(soup)
    send_metrics(metric)

    driver.quit()

    #logging.info(f'Accessed {BASE_URL} ..')
    #logging.info(f'Page title: {driver.title}')


if __name__ == '__main__':
    main()