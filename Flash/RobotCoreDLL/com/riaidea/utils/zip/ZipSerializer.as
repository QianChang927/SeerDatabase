package com.riaidea.utils.zip
{
   import flash.utils.ByteArray;
   import flash.utils.Endian;
   
   internal class ZipSerializer
   {
       
      
      private var stream:ByteArray;
      
      public function ZipSerializer()
      {
         super();
      }
      
      public function serialize(param1:ZipArchive, param2:uint = 8) : ByteArray
      {
         var _loc5_:int = 0;
         var _loc7_:ZipFile = null;
         var _loc8_:ByteArray = null;
         if(param1.numFiles <= 0)
         {
            return null;
         }
         var _loc3_:ByteArray = new ByteArray();
         var _loc4_:ByteArray = new ByteArray();
         _loc3_.endian = _loc4_.endian = Endian.LITTLE_ENDIAN;
         var _loc6_:int = 0;
         while(_loc6_ < param1.numFiles)
         {
            _loc7_ = param1.getFileAt(_loc6_);
            _loc8_ = this.serializeContent(_loc7_,param2);
            this.serializeFile(_loc3_,_loc7_,true);
            _loc3_.writeBytes(_loc8_);
            this.serializeFile(_loc4_,_loc7_,false,_loc5_);
            _loc5_ = int(_loc3_.position);
            _loc6_++;
         }
         _loc3_.writeBytes(_loc4_);
         this.serializeEnd(_loc3_,_loc5_,_loc3_.length - _loc5_,param1.numFiles);
         return _loc3_;
      }
      
      private function serializeFile(param1:ByteArray, param2:ZipFile, param3:Boolean = true, param4:uint = 0) : void
      {
         if(param3)
         {
            param1.writeUnsignedInt(ZipConstants.LOCSIG);
         }
         else
         {
            param1.writeUnsignedInt(ZipConstants.CENSIG);
            param1.writeShort(param2._version);
         }
         param1.writeShort(param2._version);
         param1.writeShort(param2._flag);
         param1.writeShort(param2._compressionMethod);
         param1.writeUnsignedInt(param2._dostime);
         param1.writeUnsignedInt(param2._crc32);
         param1.writeUnsignedInt(param2._compressedSize);
         param1.writeUnsignedInt(param2._size);
         var _loc5_:ByteArray;
         (_loc5_ = new ByteArray()).writeMultiByte(param2._name,param2._encoding);
         param1.writeShort(_loc5_.position);
         param1.writeShort(param2.hasExtra() ? int(param2._extra.length) : 0);
         if(!param3)
         {
            param1.writeShort(!!param2._comment ? param2._comment.length : 0);
            param1.writeShort(0);
            param1.writeShort(0);
            param1.writeUnsignedInt(0);
            param1.writeUnsignedInt(param4);
         }
         param1.writeBytes(_loc5_);
         if(param2.hasExtra())
         {
            param1.writeBytes(param2._extra);
         }
         if(!param3 && Boolean(param2._comment))
         {
            param1.writeUTFBytes(param2._comment);
         }
      }
      
      private function serializeContent(param1:ZipFile, param2:uint = 8) : ByteArray
      {
         var _loc4_:ByteArray = null;
         param1._compressionMethod = param2;
         param1._flag = 0;
         var _loc3_:ByteArray = new ByteArray();
         _loc3_.writeBytes(param1.data);
         if(param2 == ZipConstants.DEFLATED)
         {
            try
            {
               _loc3_.compress();
            }
            catch(e:Error)
            {
            }
            _loc4_ = new ByteArray();
            if(_loc3_.length - 6 > 0)
            {
               param1._compressedSize = _loc3_.length - 6;
               _loc4_.writeBytes(_loc3_,2,_loc3_.length - 6);
            }
            return _loc4_;
         }
         if(param2 == ZipConstants.STORED)
         {
            param1._compressedSize = _loc3_.length;
         }
         return _loc3_;
      }
      
      private function serializeEnd(param1:ByteArray, param2:uint, param3:uint, param4:uint) : void
      {
         param1.writeUnsignedInt(ZipConstants.ENDSIG);
         param1.writeShort(0);
         param1.writeShort(0);
         param1.writeShort(param4);
         param1.writeShort(param4);
         param1.writeUnsignedInt(param3);
         param1.writeUnsignedInt(param2);
         param1.writeShort(0);
      }
   }
}
