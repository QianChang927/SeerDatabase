package com.riaidea.utils.zip
{
   import flash.events.*;
   import flash.net.*;
   import flash.utils.*;
   
   internal class ZipParser
   {
       
      
      private var _zip:com.riaidea.utils.zip.ZipArchive;
      
      private var _data:ByteArray;
      
      private var _entries:int;
      
      private var _offsetOfFirstEntry:int;
      
      public function ZipParser()
      {
         super();
         this._entries = 0;
         this._offsetOfFirstEntry = 0;
      }
      
      internal function loadZipFromFile(param1:com.riaidea.utils.zip.ZipArchive, param2:String) : void
      {
         this._zip = param1;
         this._data = new ByteArray();
         this._data.endian = Endian.LITTLE_ENDIAN;
         this.load(param2);
      }
      
      internal function loadZipFromBytes(param1:com.riaidea.utils.zip.ZipArchive, param2:ByteArray) : void
      {
         this._zip = param1;
         this._data = param2;
         this._data.position = 0;
         this._data.endian = Endian.LITTLE_ENDIAN;
         this.parse();
      }
      
      private function load(param1:String) : void
      {
         var _loc2_:URLStream = new URLStream();
         _loc2_.load(new URLRequest(param1));
         _loc2_.addEventListener(ProgressEvent.PROGRESS,this.zipLoadHanlder);
         _loc2_.addEventListener(Event.COMPLETE,this.zipLoadHanlder);
         _loc2_.addEventListener(IOErrorEvent.IO_ERROR,this.zipLoadHanlder);
      }
      
      private function zipLoadHanlder(param1:Event) : void
      {
         switch(param1.type)
         {
            case Event.COMPLETE:
               param1.target.removeEventListener(ProgressEvent.PROGRESS,this.zipLoadHanlder);
               param1.target.removeEventListener(Event.COMPLETE,this.zipLoadHanlder);
               param1.target.removeEventListener(IOErrorEvent.IO_ERROR,this.zipLoadHanlder);
               URLStream(param1.target).readBytes(this._data);
               this._zip.dispatchEvent(new ZipEvent(ZipEvent.LOADED));
               this.parse();
               break;
            case ProgressEvent.PROGRESS:
               this._zip.dispatchEvent(new ZipEvent(ZipEvent.PROGRESS,{
                  "bytesLoaded":ProgressEvent(param1).bytesLoaded,
                  "bytesTotal":ProgressEvent(param1).bytesTotal
               }));
               break;
            case IOErrorEvent.IO_ERROR:
               param1.target.removeEventListener(ProgressEvent.PROGRESS,this.zipLoadHanlder);
               param1.target.removeEventListener(Event.COMPLETE,this.zipLoadHanlder);
               param1.target.removeEventListener(IOErrorEvent.IO_ERROR,this.zipLoadHanlder);
               this._zip.dispatchEvent(new ZipEvent(ZipEvent.ERROR,IOErrorEvent(param1).text));
         }
      }
      
      private function parse() : void
      {
         var endCentralDir:int = 0;
         var thisDiskNumber:int = 0;
         var startCentralDirDisk:int = 0;
         var entriesForThisDisk:int = 0;
         var entriesForWholeCentralDir:int = 0;
         var centralDirSize:int = 0;
         var offsetOfCentralDir:int = 0;
         var commentSize:int = 0;
         var i:int = 0;
         var commentBa:ByteArray = null;
         try
         {
            endCentralDir = this.locateBlockWithSignature(ZipConstants.ENDSIG,this._data.length,ZipConstants.ENDHDR,65535);
            if(endCentralDir < 0)
            {
               throw new Error("Cannot find central directory");
            }
            thisDiskNumber = int(this._data.readUnsignedShort());
            startCentralDirDisk = int(this._data.readUnsignedShort());
            entriesForThisDisk = int(this._data.readUnsignedShort());
            entriesForWholeCentralDir = int(this._data.readUnsignedShort());
            centralDirSize = int(this._data.readUnsignedInt());
            offsetOfCentralDir = int(this._data.readUnsignedInt());
            commentSize = int(this._data.readUnsignedShort());
            if(commentSize > 0)
            {
               commentBa = new ByteArray();
               this._data.readBytes(commentBa,0,commentSize);
               this._zip.comment = commentBa.readMultiByte(commentBa.length,this._zip.encoding);
            }
            this._offsetOfFirstEntry = 0;
            if(offsetOfCentralDir < endCentralDir - (4 + centralDirSize))
            {
               this._offsetOfFirstEntry = endCentralDir - (4 + centralDirSize + offsetOfCentralDir);
               if(this._offsetOfFirstEntry <= 0)
               {
                  throw new Error("Invalid embedded zip archive!");
               }
            }
            this._entries = entriesForThisDisk;
            this._data.position = this._offsetOfFirstEntry + offsetOfCentralDir;
            i = 0;
            while(i < entriesForThisDisk)
            {
               this.parseFile();
               i++;
            }
            this._zip.dispatchEvent(new ZipEvent(ZipEvent.INIT));
         }
         catch(e:Error)
         {
            _zip.dispatchEvent(new ZipEvent(ZipEvent.ERROR,e.message));
         }
         this._data = null;
      }
      
      private function parseFile() : void
      {
         var _loc19_:ByteArray = null;
         if(this._data.readUnsignedInt() != ZipConstants.CENSIG)
         {
            throw new Error("Invalid central directory signature!");
         }
         var _loc1_:int = int(this._data.readUnsignedShort());
         var _loc2_:int = int(this._data.readUnsignedShort());
         var _loc3_:int = int(this._data.readUnsignedShort());
         var _loc4_:int = int(this._data.readUnsignedShort());
         var _loc5_:int = int(this._data.readUnsignedInt());
         var _loc6_:int = int(this._data.readUnsignedInt());
         var _loc7_:int = int(this._data.readUnsignedInt());
         var _loc8_:int = int(this._data.readUnsignedInt());
         var _loc9_:int = int(this._data.readUnsignedShort());
         var _loc10_:int = int(this._data.readUnsignedShort());
         var _loc11_:int = int(this._data.readUnsignedShort());
         var _loc12_:int = int(this._data.readUnsignedShort());
         var _loc13_:int = int(this._data.readUnsignedShort());
         var _loc14_:int = int(this._data.readUnsignedInt());
         var _loc15_:int = int(this._data.readUnsignedInt());
         var _loc16_:String = (_loc3_ & 2048) != 0 ? "utf-8" : this._zip.encoding;
         var _loc17_:String = this._data.readMultiByte(_loc9_,_loc16_);
         var _loc18_:ZipFile;
         (_loc18_ = new ZipFile(_loc17_))._crc32 = _loc6_ & 4294967295;
         _loc18_._size = _loc8_ & 4294967295;
         _loc18_._compressedSize = _loc7_ & 4294967295;
         _loc18_._compressionMethod = _loc4_;
         _loc18_._flag = _loc3_;
         _loc18_._dostime = _loc5_;
         _loc18_._encoding = _loc16_;
         _loc18_._encrypted = (_loc3_ & 1) == 1;
         if(_loc10_ > 0)
         {
            _loc19_ = new ByteArray();
            this._data.readBytes(_loc19_,0,_loc10_);
            _loc18_._extra = _loc19_;
         }
         if(_loc11_ > 0)
         {
            _loc18_._comment = this._data.readMultiByte(_loc11_,_loc18_._encoding);
         }
         this.parseContent(_loc18_,_loc15_);
         this._zip.addFile(_loc18_);
      }
      
      private function parseContent(param1:ZipFile, param2:int) : void
      {
         var _loc5_:ByteArray = null;
         var _loc6_:ZipInflater = null;
         var _loc3_:int = int(this._data.position);
         this._data.position = param2 + ZipConstants.LOCHDR + param1.name.length;
         if(param1._extra != null)
         {
            this._data.position += param1._extra.length;
         }
         var _loc4_:ByteArray = new ByteArray();
         this._data.readBytes(_loc4_,0,param1._compressedSize);
         this._data.position = _loc3_;
         if(param1.encrypted)
         {
            param1._data = _loc4_;
            return;
         }
         switch(param1._compressionMethod)
         {
            case ZipConstants.STORED:
               param1._data = _loc4_;
               break;
            case ZipConstants.DEFLATED:
               _loc5_ = new ByteArray();
               (_loc6_ = new ZipInflater()).setInput(_loc4_);
               _loc6_.inflate(_loc5_);
               param1._data = _loc5_;
               break;
            default:
               throw new Error("Invalid compression method!");
         }
      }
      
      private function locateBlockWithSignature(param1:int, param2:int, param3:int, param4:int) : int
      {
         var _loc5_:int = param2 - param3;
         var _loc6_:int = Math.max(_loc5_ - param4,0);
         if(_loc5_ < 0 || _loc5_ < _loc6_)
         {
            return -1;
         }
         while(_loc5_ >= _loc6_)
         {
            if(this._data[_loc5_] == 80)
            {
               this._data.position = _loc5_;
               if(this._data.readUnsignedInt() == param1)
               {
                  return _loc5_;
               }
            }
            _loc5_--;
         }
         return -1;
      }
   }
}
