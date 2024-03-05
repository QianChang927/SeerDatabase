package com.robot.app2.control.newSpt
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.newloader.SeerUrlLoader;
   import com.robot.core.zip.PreloadZipXMLController;
   import flash.utils.Dictionary;
   import mx.collections.ArrayList;
   import org.taomee.bean.BaseBean;
   
   public class NewSptManager extends BaseBean
   {
      
      public static const SPT_TYPE_1:int = 1;
      
      public static const SPT_TYPE_2:int = 2;
      
      public static const SPT_TYPE_3:int = 3;
      
      private static var _levels:Dictionary;
      
      private static var _allFightRecordValueArr:Array = [];
      
      private static var _unlockInfo:Object = {};
      
      private static var _exchangePetList:Array = [];
       
      
      public function NewSptManager()
      {
         super();
      }
      
      public static function updateFightStatu(param1:Function = null) : void
      {
         var fun:Function = param1;
         KTool.getMultiValue([3181,3182,3183],function(param1:Array):void
         {
            var value:int = 0;
            var arr:Array = param1;
            var i:int = 0;
            while(i < arr.length)
            {
               value = int(arr[i]);
               _unlockInfo[i + 1] = Math.floor(value / 10);
               if(value % 10 != 5 && value != 0)
               {
                  _unlockInfo[i + 1] = _unlockInfo[i + 1] - 1;
               }
               i++;
            }
            KTool.getMultiValue(_allFightRecordValueArr,function(param1:Array):void
            {
               var _loc2_:ArrayList = null;
               var _loc3_:int = 0;
               var _loc4_:LevelInfo = null;
               for each(_loc2_ in _levels)
               {
                  _loc3_ = 0;
                  while(_loc3_ < _loc2_.length)
                  {
                     (_loc4_ = _loc2_.getItemAt(_loc3_) as LevelInfo).fightRecordValueArr = param1[_allFightRecordValueArr.indexOf(_loc4_.fightRecordValue)];
                     _loc3_++;
                  }
                  if(null != fun)
                  {
                     fun();
                  }
               }
            });
         });
      }
      
      public static function getListByType(param1:int) : ArrayList
      {
         return _levels[param1];
      }
      
      public static function getMaxUnlockLevelByType(param1:int) : int
      {
         return _unlockInfo[param1];
      }
      
      public static function get exchangePets() : Array
      {
         return _exchangePetList;
      }
      
      override public function start() : void
      {
         this.setUp();
         finish();
      }
      
      private function setUp() : void
      {
         var configXml:XML = null;
         var loader:SeerUrlLoader = new SeerUrlLoader("加载场景配置文件");
         PreloadZipXMLController.getXML("new_spt_config.xml",function(param1:*):void
         {
            var _loc3_:XML = null;
            var _loc4_:XML = null;
            var _loc5_:LevelInfo = null;
            var _loc6_:ArrayList = null;
            var _loc7_:Object = null;
            configXml = new XML(param1);
            var _loc2_:XMLList = configXml.descendants("level");
            _levels = new Dictionary();
            for each(_loc3_ in _loc2_)
            {
               _loc5_ = new LevelInfo(_loc3_);
               if(_levels[_loc5_.type] == null)
               {
                  _levels[_loc5_.type] = new ArrayList();
               }
               (_loc6_ = _levels[_loc5_.type]).addItem(_loc5_);
               _allFightRecordValueArr.push(_loc5_.fightRecordValue);
            }
            _loc2_ = configXml.descendants("pet");
            for each(_loc4_ in _loc2_)
            {
               (_loc7_ = {})["pid"] = int(_loc4_.@id);
               _loc7_["exchangeId"] = int(_loc4_.@exchangeId);
               _loc7_["itemId"] = int(_loc4_.@itemId);
               _loc7_["count"] = int(_loc4_.@count);
               _exchangePetList.push(_loc7_);
            }
         });
      }
   }
}
