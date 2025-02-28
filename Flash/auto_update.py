import requests, json
import os, datetime, zlib
os.chdir(os.path.abspath(os.path.dirname(__file__)))

class AutoUpdater_Flash:
    # Script Settings
    maxRetryTimes:      int     =   20
    workPath:           str     =   os.getcwd()
    versionPath:        str     =   os.path.join(workPath, '../H5/version.json')

    # Data Url
    versionUrl:         str     =   'https://seerh5.61.com/version/version.json'
    swfUrl:             dict    =   {
                                        'https://seer.61.com/dll/RobotCoreDLL.swf'      :   7,
                                        'https://seer.61.com/dll/RobotAppDLL.swf'       :   7,
                                        'https://seer.61.com/dll/RobotApp_2DLL.swf'     :   7,
                                        'https://seer.61.com/dll/TaomeeLibraryDLL.swf'  :   7
                                    }

    # Swf Decoder
    def decoder(self, content: bytes, offset: int) -> bytes:
        buffer: bytes = content[offset:]
        buffer = zlib.decompress(buffer)
        return buffer

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
    def downloadFile(self, url: str, savePath: str = None) -> str | bytes:
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
        elif fileExt == '.swf':
            content: bytes = response.content

        if savePath:
            saveDir: str = os.path.dirname(savePath)
            if not os.path.exists(saveDir):
                os.makedirs(saveDir)

            if fileExt == '.json':
                with open(savePath, 'w', encoding = 'utf-8') as f:
                    f.write(json.dumps(content, indent = 4, ensure_ascii = False))
            else:
                content: str = self.decoder(content, self.swfUrl[url])
                with open(savePath, 'wb') as f:
                    f.write(content)
        
        return content
    
    def checkIsLatest(self, filePath: str) -> bool:
        if not os.path.exists(filePath):
            return False
        
        versionMTime = datetime.datetime.fromtimestamp(os.path.getmtime(self.versionPath))
        fileMTime = datetime.datetime.fromtimestamp(os.path.getmtime(filePath))
        return fileMTime >= versionMTime
    
    # Auto Update
    def update(self) -> None:
        for url in self.swfUrl:
            fileName: str = url.split('/')[-1]
            savePath: str = os.path.join(self.workPath, 'swf', fileName)

            if not self.checkIsLatest(savePath):
                self.downloadFile(url, savePath)

if __name__ == '__main__':
    updater = AutoUpdater_Flash()
    updater.update()
