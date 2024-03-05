package com.robot.core.config.xml
{
   import com.robot.core.config.xmlInfo.DialogInfo;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.zip.PreloadZipXMLController;
   import org.taomee.ds.HashMap;
   
   public class DialogXMLInfo
   {
      
      public static var configXml:XML;
      
      private static var _fun:Function;
      
      private static var _dialogsHash:HashMap = new HashMap();
      
      private static var _itemHash:HashMap = new HashMap();
       
      
      public function DialogXMLInfo()
      {
         super();
      }
      
      public static function setup() : void
      {
         var url:String = null;
         url = "dialog.xml";
         PreloadZipXMLController.getXML(url,function(param1:*):void
         {
            var _loc3_:XML = null;
            configXml = new XML(param1);
            var _loc2_:XMLList = configXml.elements("dialogs");
            for each(_loc3_ in _loc2_)
            {
               _dialogsHash.add(uint(_loc3_.@activityID),_loc3_);
            }
         });
      }
      
      public static function getDialogByAcId(param1:int, param2:int = 1) : Array
      {
         var _loc5_:XML = null;
         var _loc6_:XML = null;
         var _loc9_:XML = null;
         var _loc10_:DialogInfo = null;
         var _loc3_:XML = _dialogsHash.getValue(param1);
         if(_loc3_ == null)
         {
            Alarm2.show("提示：没有配置对话框！activityID 为活动id:" + param1 + " numId为第几个对话框:" + param2);
            return null;
         }
         var _loc4_:XMLList = _loc3_.elements("item");
         for each(_loc6_ in _loc4_)
         {
            if(_loc6_.@id == param2)
            {
               _loc5_ = _loc6_;
            }
         }
         if(_loc5_ == null)
         {
            Alarm2.show("提示：没有配置对话框！activityID 为活动id:" + param1 + " numId为第几个对话框:" + param2);
            return null;
         }
         var _loc7_:Array = [];
         var _loc8_:XMLList = _loc5_.elements("dialog");
         for each(_loc9_ in _loc8_)
         {
            (_loc10_ = new DialogInfo()).npcName = _loc9_.@npcName;
            _loc10_.npcID = _loc9_.@npcID;
            _loc10_.dialogArr = _loc9_.@dialogArr;
            _loc10_.questionArr = _loc9_.@questionArr;
            _loc10_.handler = _loc9_.@handler;
            _loc7_.push(_loc10_);
         }
         return _loc7_;
      }
   }
}
