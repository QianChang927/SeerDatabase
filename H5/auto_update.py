import os, json, requests
import time, datetime
from selenium import webdriver
from selenium.webdriver.common.by import By
os.chdir(os.path.abspath(os.path.dirname(__file__)))

class AutoUpdater_H5:
    # Script Settings
    maxRetryTimes:  int         =   20
    workPath:       str         =   os.getcwd()
    versionPath:    str         =   os.path.join(workPath, 'version.json')
    
    # Data Url
    versionUrl:     str         =   'https://seerh5.61.com/version/version.json'
    baseUrl:        str         =   'https://seerh5.61.com'

    # JavaScript Decoder
    driver:         webdriver   =   None
    decoderUrl:     str         =   'https://www.jb51.net/tools/eval/'
    decoderDelay:   float       =   0.5
    
    def decoder(self, content: str) -> str:
        # webdriver init
        if not self.driver:
            option = webdriver.EdgeOptions()
            option.add_argument('--headless')
            option.add_argument('--disable-gpu')
            option.add_argument('log-level=3')

            self.driver = webdriver.Edge(options = option)
            self.driver.get(self.decoderUrl)
        
        textArea = self.driver.find_element(by = By.XPATH, value = "//*[@id='content']")
        self.driver.execute_script("arguments[0].click();", textArea)
        self.driver.execute_script("arguments[0].value = arguments[1];", textArea, content)

        decodeBtn = self.driver.find_element(by = By.XPATH, value = "//*[@id='decode']")
        self.driver.execute_script("arguments[0].click();", decodeBtn)
        time.sleep(self.decoderDelay)
        self.driver.execute_script("arguments[0].click();", decodeBtn)
        time.sleep(self.decoderDelay)

        textArea = self.driver.find_element(by = By.XPATH, value = "//*[@id='content']")
        return textArea.get_attribute('value')
    
    # Init
    def __init__(self) -> None:
        try:
            with open(self.versionPath, 'r', encoding = 'utf-8') as f:
                self.version: dict = json.load(f)
            
            versionLatest: dict = self.downloadFile(self.versionUrl)
            if versionLatest['version'] != self.version['version']:
                self.version: dict = self.downloadFile(self.versionUrl, self.versionPath)
        except:
            self.version: dict = self.downloadFile(self.versionUrl, self.versionPath)

    # Utils
    def downloadFile(self, url: str, savePath: str = None) -> str | dict:
        baseName: str = os.path.basename(url)

        for _ in range(self.maxRetryTimes):
            response = requests.get(url)
            if response.status_code == 200:
                break
        if response.status_code != 200:
            print(f"{baseName} doesn't exists")
            return
        
        fileExt: str = os.path.splitext(baseName)[-1]
        if not savePath or fileExt == '.json':
            content: dict = response.json()
        elif fileExt == '.js':
            content: str = response.text

        if savePath:
            saveDir: str = os.path.dirname(savePath)
            if not os.path.exists(saveDir):
                os.makedirs(saveDir)

            if fileExt == '.json':
                with open(savePath, 'w', encoding = 'utf-8') as f:
                    f.write(json.dumps(content, indent = 4, ensure_ascii = False))
            elif fileExt == '.js':
                content: str = self.decoder(content)
                with open(savePath, 'w', encoding = 'utf-8') as f:
                    f.write(content)
        
        return content
    
    def checkIsLatest(self, filePath: str) -> bool:
        if not os.path.exists(filePath):
            return False
        
        versionMTime = datetime.datetime.fromtimestamp(os.path.getmtime(self.versionPath))
        fileMTime = datetime.datetime.fromtimestamp(os.path.getmtime(filePath))
        return fileMTime >= versionMTime
    
    def updateFile(self, json: dict, filePath: list) -> None:
        for key, value in json.items():
            if isinstance(value, dict):
                self.updateFile(value, filePath + [key])
            elif isinstance(value, str):
                downloadUrl: str = os.path.join(self.baseUrl, *filePath, value).replace('\\', '/')
                savePath: str = os.path.join(self.workPath, *filePath, key)
                if not self.checkIsLatest(savePath):
                    self.downloadFile(downloadUrl, savePath)

    # Auto Update
    def update(self) -> None:
        config: dict = self.version['files']['resource']['config']
        self.updateFile(config, ['resource', 'config'])

        app: dict = self.version['files']['resource']['app']
        self.updateFile(app, ['resource', 'app'])

if __name__ == '__main__':
    updater = AutoUpdater_H5()
    updater.update()
    updater.driver.quit()
