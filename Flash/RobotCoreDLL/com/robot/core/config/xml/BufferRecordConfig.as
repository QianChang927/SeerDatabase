package com.robot.core.config.xml
{
   import com.robot.core.config.xmlInfo.BufferInfo;
   import flash.net.registerClassAlias;
   import flash.utils.ByteArray;
   import flash.utils.Dictionary;
   import flash.utils.getTimer;
   import org.taomee.debug.DebugTrace;
   
   public class BufferRecordConfig
   {
      
      private static var _xmlClass:Class = BufferRecordConfig__xmlClass;
      
      private static var _xml:XML = XML(new _xmlClass());
      
      private static var _cacheInfoArr:Array = [];
      
      private static var _proDic:Dictionary = new Dictionary();
      
      private static var _bitbuffDic:Dictionary = new Dictionary();
      
      private static var time:uint;
      
      {
         setup();
      }
      
      public function BufferRecordConfig()
      {
         super();
      }
      
      public static function getBitIndexByID(param1:uint) : uint
      {
         if(_proDic[param1] == null)
         {
            throw new Error("bufferrecord.xml====没有配置存储,buffer id = " + param1.toString());
         }
         return _proDic[param1].bitindex;
      }
      
      public static function getBitBuffIndexByID(param1:uint) : uint
      {
         if(_bitbuffDic[param1] == null)
         {
            throw new Error("bufferrecord.xml====没有配置存储,bitbuff id = " + param1.toString());
         }
         return _bitbuffDic[param1].bitindex;
      }
      
      public static function getBitBuffID(param1:uint) : uint
      {
         var _loc2_:BufferInfo = null;
         for each(_loc2_ in _bitbuffDic)
         {
            if(_loc2_.bitindex == param1)
            {
               return _loc2_.id;
            }
         }
         throw new Error("bufferrecord.xml====没有配置存储,bitbuff index = " + param1.toString());
      }
      
      public static function getBitBuffArray() : Array
      {
         var _loc2_:BufferInfo = null;
         var _loc1_:Array = [];
         for each(_loc2_ in _bitbuffDic)
         {
            _loc1_.push(_loc2_.bitindex);
         }
         DebugTrace.show("bufferrecord.xml解析时间：" + (getTimer() - time) / 1000);
         return _loc1_;
      }
      
      public static function setup() : void
      {
         time = getTimer();
         var _loc1_:XML = XML(new _xmlClass());
         parseItemXMLList(_loc1_);
      }
      
      public static function exportByteArray(... rest) : ByteArray
      {
         var _loc2_:XML = null;
         var _loc3_:ByteArray = null;
         registerClassAlias("com.robot.core.config.xmlInfo.BufferInfo",BufferInfo);
         _cacheInfoArr = [];
         for each(_loc2_ in rest)
         {
            parseItemXMLList(_loc2_);
         }
         _loc3_ = new ByteArray();
         _loc3_.writeObject(_cacheInfoArr);
         _loc3_.compress();
         return _loc3_;
      }
      
      private static function parseItemXMLList(param1:XML) : void
      {
         var _loc4_:XML = null;
         var _loc5_:BufferInfo = null;
         var _loc2_:XMLList = _xml.descendants("bitbuff");
         var _loc3_:XMLList = _xml.descendants("pro");
         for each(_loc4_ in _loc2_)
         {
            (_loc5_ = new BufferInfo()).bitindex = _loc4_.@bitindex;
            _loc5_.id = _loc4_.@id;
            _loc5_.isbitbuff = true;
            _cacheInfoArr.push(_loc5_);
            _bitbuffDic[_loc5_.id] = _loc5_;
         }
         for each(_loc4_ in _loc3_)
         {
            (_loc5_ = new BufferInfo()).bitindex = _loc4_.@bitindex;
            _loc5_.isbitbuff = false;
            _loc5_.id = _loc4_.@id;
            _proDic[_loc5_.id] = _loc5_;
            _cacheInfoArr.push(_loc5_);
         }
      }
   }
}
