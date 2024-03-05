package com.robot.app2.control
{
   import com.robot.core.info.pet.PetListInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class PetEvoController
   {
      
      private static var _preFormArr:Array;
      
      private static var _evoForm:int;
      
      private static var _endFunc:Function;
      
      private static var _evoItem:int;
       
      
      public function PetEvoController()
      {
         super();
      }
      
      public static function start(param1:Array, param2:int, param3:int, param4:Function = null) : void
      {
         _preFormArr = param1;
         _evoForm = param2;
         _endFunc = param4;
         _evoItem = param3;
         do_check();
      }
      
      private static function do_check() : void
      {
         var captime:int = 0;
         captime = 0;
         PetManager.upDate(function():void
         {
            var info:PetListInfo = null;
            for each(info in PetManager.getBagMap())
            {
               if(_preFormArr.indexOf(info.id) != -1)
               {
                  captime = info.catchTime;
               }
            }
            if(captime == 0)
            {
               Alarm.show("精灵还没有放入你的精灵背包哦！");
               return;
            }
            ItemManager.upDateCollection(_evoItem,function():void
            {
               if(ItemManager.getNumByID(_evoItem) <= 0)
               {
                  Alarm.show("你还没有超进化道具哦！");
                  return;
               }
               SocketConnection.sendWithCallback(9198,function(param1:SocketEvent):void
               {
                  var _loc2_:ByteArray = param1.data as ByteArray;
                  _loc2_.position = 0;
                  var _loc3_:int = int(_loc2_.readUnsignedInt());
                  if(_evoForm == _loc3_)
                  {
                     Alarm.show("超进化成功！");
                     if(_endFunc != null)
                     {
                        _endFunc();
                     }
                  }
               },captime);
            });
         });
      }
   }
}
