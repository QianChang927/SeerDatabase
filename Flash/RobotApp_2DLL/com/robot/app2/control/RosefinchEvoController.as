package com.robot.app2.control
{
   import com.robot.app.mapProcess.MapProcess_10829;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.ArrayUtils;
   import flash.display.MovieClip;
   import flash.utils.clearInterval;
   import flash.utils.setInterval;
   
   public class RosefinchEvoController
   {
      
      public static const RETRY_TIMES:int = 5;
      
      public static var PET_IDS:Array;
      
      private static var interval:int;
       
      
      public function RosefinchEvoController()
      {
         super();
      }
      
      private static function enterMaze() : void
      {
         var pets:Array;
         var i:int;
         var info:PetInfo = null;
         if(MainManager.actorInfo.actionType != 0)
         {
            Alarm.show("你开启了飞行模式, 无法进入神火迷阵！");
            return;
         }
         pets = PetManager.infos;
         if(pets.length == 0)
         {
            Alarm.show("你的对战背包没有精灵, 无法进入神火迷阵！");
            return;
         }
         i = 0;
         while(i < pets.length)
         {
            info = pets[i];
            if(info.level < 100)
            {
               Alarm.show("你的对战背包里有未满级精灵, 无法进入神火迷阵！");
               return;
            }
            i++;
         }
         ItemManager.updateItems([1703832],function():void
         {
            var randomMap:int = 0;
            var items:int = 0;
            if(ItemManager.getInfo(1703832))
            {
               items = int(ItemManager.getInfo(1703832).itemNum);
            }
            if(items)
            {
               makeArray();
               randomMap = int(Math.random() * 3) + 1;
               if(MainManager.actorInfo.actionType != 0)
               {
                  Alarm.show("你开启了飞行模式, 无法进入神火迷阵！");
                  return;
               }
               SocketConnection.sendWithCallback(41594,function():void
               {
                  KTool.getMultiValue([1699],function(param1:Array):void
                  {
                     var _loc2_:int = int(param1[0]);
                     MapManager.changeLocalMap(10828 + _loc2_);
                  });
               },1,randomMap);
            }
            else
            {
               Alarm.show("你没有朱雀挑战令,无法进入神火迷阵！（和探险家对话-> 点击：我是来寻找炽凰朱雀大人的！->点击：告诉我神火迷阵的开启时间！->挑战获得）");
            }
         });
      }
      
      private static function makeArray() : void
      {
         var _loc1_:Array = MapProcess_10829.ALL_PETS.concat();
         _loc1_.pop();
         _loc1_.pop();
         _loc1_ = ArrayUtils.shuffle(_loc1_);
         _loc1_.push(MapProcess_10829.ALL_PETS[MapProcess_10829.ALL_PETS.length - 2]);
         _loc1_.push(MapProcess_10829.ALL_PETS[MapProcess_10829.ALL_PETS.length - 1]);
         PET_IDS = _loc1_;
      }
      
      public static function chechEntryState(param1:MovieClip) : void
      {
         var mc:MovieClip = param1;
         MapListenerManager.add(mc,function():void
         {
            enterMaze();
         },"神火迷阵");
         docheck(mc);
         clearInterval(interval);
         interval = setInterval(function():void
         {
            if(MapManager.currentMap == null || MapManager.currentMap.id != 1066)
            {
               clearInterval(interval);
            }
            else
            {
               docheck(mc);
            }
         },10000);
      }
      
      private static function docheck(param1:MovieClip) : void
      {
         var _loc2_:Date = SystemTimerManager.sysBJDate;
         var _loc3_:Boolean = false;
         if(_loc2_.hours == 12 && _loc2_.minutes >= 30)
         {
            _loc3_ = true;
         }
         if(_loc2_.hours == 18 && _loc2_.minutes >= 30)
         {
            _loc3_ = true;
         }
         if(_loc2_.hours == 20 && _loc2_.minutes < 30)
         {
            _loc3_ = true;
         }
         if(_loc2_.hours == 21 && _loc2_.minutes < 30)
         {
            _loc3_ = true;
         }
         if(_loc2_.hours == 22 && _loc2_.minutes < 30)
         {
            _loc3_ = true;
         }
         param1.visible = _loc3_;
      }
      
      public static function goFind2BLong() : void
      {
         if(MapManager.currentMap.id != 1067)
         {
            MapManager.changeMap(1067);
         }
      }
   }
}
