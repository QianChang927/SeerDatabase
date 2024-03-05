package com.robot.app.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.zip.PreloadZipXMLController;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   
   public class SummerAchieveController
   {
      
      private static var _items:Array;
      
      private static var configXml:XML;
      
      public static var totalnum:int;
       
      
      public function SummerAchieveController()
      {
         super();
      }
      
      public static function setup() : void
      {
         SocketConnection.addCmdListener(45675,achiveComplete);
         PreloadZipXMLController.getXML("SummerCampAchievement.xml",function(param1:*):void
         {
            configXml = new XML(param1);
            parsexml();
         });
      }
      
      private static function achiveComplete(param1:SocketEvent) : void
      {
         var obj:Object = null;
         var e:SocketEvent = param1;
         var bytearr:ByteArray = e.data as ByteArray;
         var id:int = int(bytearr.readUnsignedInt());
         obj = getavhieveinfo(id);
         if(LevelManager.appLevel)
         {
            ResourceManager.getResource(ClientConfig.getAppResource("2016/0729/achievemovie"),function(param1:MovieClip):void
            {
               param1["mc"]["mc"].acname = obj.name;
               LevelManager.stage.addChild(param1);
               param1["mc"]["mc"].addEventListener(Event.ENTER_FRAME,frameHandle);
               param1["mc"]["mc"].gotoAndPlay(1);
            });
         }
      }
      
      private static function frameHandle(param1:Event) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         if(_loc2_.txt)
         {
            _loc2_.txt.text = _loc2_.acname;
         }
         if(_loc2_.currentFrame == _loc2_.totalFrames)
         {
            _loc2_.removeEventListener(Event.ENTER_FRAME,frameHandle);
            if(_loc2_.parent)
            {
               _loc2_.parent.removeChild(_loc2_);
            }
         }
      }
      
      public static function getavhieveinfo(param1:int) : Object
      {
         var _loc2_:Object = null;
         var _loc4_:int = 0;
         var _loc3_:int = 0;
         while(_loc3_ < items.length)
         {
            _loc4_ = 0;
            while(_loc4_ < items[_loc3_].arr.length)
            {
               if(items[_loc3_].arr[_loc4_].id == param1)
               {
                  return items[_loc3_].arr[_loc4_];
               }
               _loc4_++;
            }
            _loc3_++;
         }
         return null;
      }
      
      private static function parsexml() : void
      {
         var _loc2_:Object = null;
         var _loc3_:XML = null;
         var _loc4_:Array = null;
         var _loc5_:XMLList = null;
         var _loc6_:Object = null;
         var _loc7_:XML = null;
         totalnum = 0;
         _items = [];
         var _loc1_:XMLList = configXml.type;
         for each(_loc3_ in _loc1_)
         {
            _loc2_ = new Object();
            _loc2_.id = int(_loc3_.@id);
            _loc2_.desc = String(_loc3_.@desc);
            _loc4_ = [];
            _loc5_ = _loc3_.Rule;
            for each(_loc7_ in _loc5_)
            {
               (_loc6_ = new Object()).type = _loc2_.id;
               _loc6_.id = int(_loc7_.@id);
               _loc6_.point = int(_loc7_.@point);
               _loc6_.item = int(_loc7_.@item);
               _loc6_.num = int(_loc7_.@num);
               _loc6_.name = String(_loc7_.@name);
               _loc6_.desc = String(_loc7_.@desc);
               _loc4_.push(_loc6_);
               ++totalnum;
            }
            _loc2_.arr = _loc4_;
            items.push(_loc2_);
         }
      }
      
      public static function get items() : Array
      {
         return _items;
      }
   }
}
