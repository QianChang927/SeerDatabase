package com.robot.app.control
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.CountermarkXMLInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.info.userItem.CountermarkInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.utils.setTimeout;
   
   public class SpriteCountermarkController
   {
       
      
      public function SpriteCountermarkController()
      {
         super();
      }
      
      public static function show(param1:Object) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("PetCountermarkPanel2014"),"正在打开...",param1);
      }
      
      public static function checkPetBag(param1:Function = null) : void
      {
         var info:PetInfo = null;
         var arr:Array = null;
         var count:int = 0;
         var i:int = 0;
         var func:Function = param1;
         var willAlert:Boolean = false;
         var marks:Array = ["abilityMark","skillMark","commonMark"];
         for each(info in PetManager.infos)
         {
            arr = [];
            count = 0;
            i = 0;
            while(i < marks.length)
            {
               arr[i] = isExclusiveUniversalMark(info[marks[i]]);
               if(arr[i])
               {
                  count++;
               }
               i++;
            }
            if(count > 1)
            {
               willAlert = true;
               i = 0;
               while(i < marks.length)
               {
                  if(arr[i])
                  {
                     info[marks[i]] = 0;
                     SocketConnection.send(CommandID.USE_COUNTERMARK,info.catchTime,i,0,0);
                  }
                  i++;
               }
            }
         }
         if(willAlert)
         {
            setTimeout(function():void
            {
               Alarm.show("你的精灵身上装载了多个专属全能刻印，精灵身上是不能装载多个专属全能刻印哦，现在将它们都放入刻印背包了哦！");
            },2000);
         }
         if(func != null)
         {
            func();
         }
      }
      
      private static function isExclusiveUniversalMark(param1:int) : Boolean
      {
         if(!CountermarkXMLInfo.isUniversalMark(param1))
         {
            return false;
         }
         var _loc2_:CountermarkInfo = ItemManager.getUniversalMarkInfo(param1);
         if(_loc2_)
         {
            return CountermarkXMLInfo.isExclusive(_loc2_.markID);
         }
         return false;
      }
   }
}
