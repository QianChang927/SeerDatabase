package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.SimpleAlarm;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class Juemingya
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _preTaskState:Boolean;
      
      private static var _step:uint;
      
      private static var _mushRoomState:uint;
      
      private static var _isFighting:Boolean;
      
      private static var _state:uint;
      
      private static var timeStr:String = "11月27日-12月3日 19:00-20:00";
      
      private static const AC:ActivityControl = new ActivityControl([new CronTimeVo("*","19","27-30","11","*","2015"),new CronTimeVo("*","19","1-3","12","*","2015")]);
       
      
      public function Juemingya()
      {
         super();
      }
      
      private static function get isInActive() : Boolean
      {
         return AC.isInActivityTime;
      }
      
      public static function initTaskFor727(param1:BaseMapProcess) : void
      {
         _map = param1;
         var _loc2_:uint = 1;
         while(_loc2_ <= 4)
         {
            _map.conLevel["mushroom" + _loc2_].visible = false;
            _map.conLevel["mushroomtxt" + _loc2_].visible = false;
            _map.conLevel["mushroom" + _loc2_].buttonMode = true;
            _map.conLevel["mushroom" + _loc2_].addEventListener(MouseEvent.CLICK,onMushRoomClick);
            _loc2_++;
         }
         var _loc3_:uint = 1;
         while(_loc3_ <= 3)
         {
            _map.conLevel["fire" + _loc3_].buttonMode = true;
            _map.conLevel["fire" + _loc3_].addEventListener(MouseEvent.CLICK,onFireClick);
            _loc3_++;
         }
         _map.conLevel["zhuerniao"].buttonMode = true;
         _map.conLevel["zhuerniao"].addEventListener(MouseEvent.CLICK,onBirdClick);
         _map.conLevel["zhuerniao2"].buttonMode = true;
         _map.conLevel["zhuerniao2"].visible = false;
         _map.conLevel["zhuerniao2"].addEventListener(MouseEvent.CLICK,onBird2Click);
         _map.conLevel["bigmushroom"].gotoAndStop(2);
         _map.conLevel["luoya"].visible = false;
         _map.conLevel["luoya"].buttonMode = true;
         _map.conLevel["luoya"].addEventListener(MouseEvent.CLICK,onLuoYaClick);
         _map.conLevel["bigmushroom"].addEventListener(MouseEvent.CLICK,onBigMushRoomClick);
         _map.conLevel["bigmushroom"].buttonMode = true;
         _map.conLevel["triggermc"].buttonMode = true;
         _map.conLevel["triggermc"].addEventListener(MouseEvent.CLICK,onTriggerMCClick);
         _map.conLevel["funanxier"].buttonMode = true;
         _map.conLevel["funanxier"].addEventListener(MouseEvent.CLICK,onFuNanXiErClick);
         startActivity();
         if(isInActive)
         {
            if(!_isFighting)
            {
               SocketConnection.addCmdListener(CommandID.GET_SPECIAL_EVENT_NOTIFICATION,onGetMsg);
            }
            SocketConnection.addCmdListener(CommandID.UPDATE_MUSH_ROOM_STATE,onGetMushRoomState);
            SocketConnection.send(CommandID.UPDATE_MUSH_ROOM_STATE);
         }
      }
      
      private static function onFuNanXiErClick(param1:MouseEvent) : void
      {
         if(_step < 2)
         {
            NpcDialog.show(NPC.FULANXIER,["想挑战我？先想办法熄灭碧火，解开我的蘑菇锁机关吧！"],["我一定会成功的！"]);
         }
         else if(_step == 3)
         {
            SimpleAlarm.show("打败蘑菇丙和蘑菇丁才可与芙兰希儿对战！");
         }
         else if(_step == 4)
         {
            onFightWidthFuNanXiEr();
         }
      }
      
      private static function onBigMushRoomClick(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("BossIntroPanel2"),"",timeStr);
      }
      
      private static function onTriggerMCClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         ItemManager.addEventListener(ItemEvent.COLLECTION_LIST,function(param1:ItemEvent):void
         {
            ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST,arguments.callee);
            var _loc3_:SingleItemInfo = ItemManager.getCollectionInfo(1200081);
            ModuleManager.showModule(ClientConfig.getAppModule("BossIntroPanel"),"正在加载......",[_loc3_,timeStr]);
         });
         ItemManager.upDateCollection(1200081);
      }
      
      private static function onBird2Click(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.ZHUERNIAO,["你敢与芙兰希儿作对，勇气可嘉，让我们切磋一下吧！"],["好的","我先准备一下"],[function():void
         {
            EventManager.addEventListener(RobotEvent.NO_PET_CAN_FIGHT,function(param1:RobotEvent):void
            {
               EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,arguments.callee);
               _isFighting = false;
            });
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
            {
               FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
               _isFighting = false;
            });
            _isFighting = true;
            FightManager.fightWithBoss("珠儿鸟",4);
         },null]);
      }
      
      private static function onLuoYaClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.LUOYA,["你敢与芙兰希儿作对，勇气可嘉，让我们切磋一下吧！"],["好的","我先准备一下"],[function():void
         {
            EventManager.addEventListener(RobotEvent.NO_PET_CAN_FIGHT,function(param1:RobotEvent):void
            {
               EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,arguments.callee);
               _isFighting = false;
            });
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
            {
               FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
               _isFighting = false;
            });
            _isFighting = true;
            FightManager.fightWithBoss("罗亚",5);
         },null]);
      }
      
      private static function onGetMsg(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         _state = _loc2_.readUnsignedInt();
      }
      
      private static function startActivity() : void
      {
         var _loc1_:Date = SystemTimerManager.sysDate;
         if(isInActive)
         {
            timeIn();
         }
         else
         {
            timeOut();
         }
      }
      
      private static function timeIn() : void
      {
         _map.conLevel["mushroom1"].visible = true;
         _map.conLevel["mushroom2"].visible = true;
         _map.conLevel["mushroomtxt1"].visible = true;
         _map.conLevel["mushroomtxt2"].visible = true;
         SocketConnection.addCmdListener(CommandID.UPDATE_MUSH_ROOM_STATE,onGetMushRoomState);
         if(_state == 1)
         {
            if(!_map.conLevel["zhuerniao2"].visible)
            {
               _map.conLevel["zhuerniao2"].visible = true;
            }
         }
         else if(_state == 2)
         {
            _map.conLevel["luoya"].visible = true;
         }
         else
         {
            _map.conLevel["zhuerniao2"].visible = false;
            _map.conLevel["luoya"].visible = false;
         }
      }
      
      private static function timeOut() : void
      {
         var _loc1_:uint = 1;
         while(_loc1_ <= 4)
         {
            _map.conLevel["mushroom" + _loc1_].visible = false;
            _map.conLevel["mushroomtxt" + _loc1_].visible = false;
            _loc1_++;
         }
         _map.conLevel["luoya"].visible = false;
         _map.conLevel["zhuerniao2"].visible = false;
      }
      
      private static function onGetMushRoomState(param1:SocketEvent) : void
      {
         var data:ByteArray;
         var e:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.UPDATE_MUSH_ROOM_STATE,onGetMushRoomState);
         data = e.data as ByteArray;
         _step = data.readUnsignedInt();
         _mushRoomState = data.readUnsignedInt();
         switch(_step)
         {
            case 0:
               break;
            case 1:
               _map.conLevel["fire1"].visible = false;
               break;
            case 2:
               _map.conLevel["fire1"].visible = false;
               _map.conLevel["fire2"].visible = false;
               break;
            case 3:
               _map.conLevel["fire1"].visible = false;
               _map.conLevel["fire3"].visible = false;
               _map.conLevel["fire2"].visible = false;
               CommonUI.addYellowArrow(_map.topLevel,385,60);
               switch(_mushRoomState)
               {
                  case 0:
                     _map.conLevel["mushroom3"].visible = true;
                     _map.conLevel["mushroomtxt3"].visible = true;
                     _map.conLevel["mushroom4"].visible = true;
                     _map.conLevel["mushroomtxt4"].visible = true;
                     break;
                  case 1:
                     _map.conLevel["mushroom3"].visible = false;
                     _map.conLevel["mushroomtxt3"].visible = false;
                     _map.conLevel["mushroom4"].visible = true;
                     _map.conLevel["mushroomtxt4"].visible = true;
                     break;
                  case 2:
                     _map.conLevel["mushroom3"].visible = true;
                     _map.conLevel["mushroomtxt3"].visible = true;
                     _map.conLevel["mushroom4"].visible = false;
                     _map.conLevel["mushroomtxt4"].visible = false;
                     break;
                  case 3:
                     _map.conLevel["mushroom3"].visible = false;
                     _map.conLevel["mushroomtxt3"].visible = false;
                     _map.conLevel["mushroom4"].visible = false;
                     _map.conLevel["mushroomtxt4"].visible = false;
               }
               break;
            case 4:
               _map.conLevel["fire1"].visible = false;
               _map.conLevel["fire3"].visible = false;
               _map.conLevel["fire2"].visible = false;
               _map.conLevel["mushroom3"].visible = false;
               _map.conLevel["mushroomtxt3"].visible = false;
               _map.conLevel["mushroom4"].visible = false;
               _map.conLevel["mushroomtxt4"].visible = false;
               _map.conLevel["zhuerniao"].visible = false;
               CommonUI.removeYellowArrow(_map.topLevel);
               if(!_isFighting)
               {
                  AnimateManager.playMcAnimate(_map.conLevel["bigmushroom"],2,"bigmushroom2",function():void
                  {
                     onFightWidthFuNanXiEr();
                  });
               }
         }
      }
      
      private static function onMushRoomClick(param1:MouseEvent) : void
      {
         var mc:MovieClip = null;
         var name:String = null;
         var len:uint = 0;
         var num:uint = 0;
         var dialogue:String = null;
         var str:String = null;
         var e:MouseEvent = param1;
         if(isInActive)
         {
            mc = e.currentTarget as MovieClip;
            name = mc.name;
            len = uint(name.length);
            num = uint(name.substr(len - 1,1));
            dialogue = "";
            str = "";
            switch(num)
            {
               case 1:
                  dialogue = "没有金刚钻，别揽瓷器活！本蘑菇陪你玩玩！能赢就送你 1个1000经验券！";
                  str = "甲";
                  break;
               case 2:
                  dialogue = "没有金刚钻，别揽瓷器活！本蘑菇陪你玩玩！能赢就送你1个碧水玄冰！";
                  str = "乙";
                  break;
               case 3:
                  dialogue = "没有金刚钻，别揽瓷器活！本蘑菇陪你玩玩！能赢就送你5个1000经验券！";
                  str = "丙";
                  break;
               case 4:
                  dialogue = "没有金刚钻，别揽瓷器活！本蘑菇陪你玩玩！能赢就送你2个碧水玄冰！";
                  str = "丁";
            }
            NpcDialog.show(NPC.QICAIMOGU,[dialogue],["看招","我先准备一下"],[function():void
            {
               EventManager.addEventListener(RobotEvent.NO_PET_CAN_FIGHT,function(param1:RobotEvent):void
               {
                  EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,arguments.callee);
                  _isFighting = false;
               });
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
               {
                  var e:PetFightEvent = param1;
                  FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                  _isFighting = false;
                  if(_step == 4)
                  {
                     AnimateManager.playMcAnimate(_map.conLevel["bigmushroom"],2,"bigmushroom2",function():void
                     {
                        onFightWidthFuNanXiEr();
                     });
                  }
               });
               _isFighting = true;
               FightManager.fightWithBoss("蘑菇" + str,num - 1);
            },null]);
         }
      }
      
      private static function onFightWidthFuNanXiEr() : void
      {
         if(_isFighting)
         {
            return;
         }
         EventManager.addEventListener(RobotEvent.NO_PET_CAN_FIGHT,function(param1:RobotEvent):void
         {
            EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,arguments.callee);
            _isFighting = false;
         });
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
            _isFighting = false;
         });
         _isFighting = true;
         FightManager.fightWithBoss("芙兰希儿",6);
      }
      
      private static function onBirdClick(param1:MouseEvent) : void
      {
         if(isInActive)
         {
            NpcDialog.show(NPC.ZHUERNIAO,["芙兰希儿的巡逻队看守来巡逻啦！打败他们收集碧水玄冰，就可以破解这碧火玄冰蘑菇锁啦！"],["你等着我的好消息！"]);
         }
         else
         {
            _preTaskState = BufferRecordManager.getState(MainManager.actorInfo,564);
            if(_preTaskState)
            {
               NpcDialog.show(NPC.ZHUERNIAO,["碧水玄冰由芙兰希儿的巡逻队看守，他们" + timeStr + "会来这里巡逻！"],["恩，到时候我一定来！"]);
            }
            else
            {
               doPreTask();
            }
         }
      }
      
      private static function doPreTask() : void
      {
         NpcDialog.show(NPC.ZHUERNIAO,["好冷啊！谁来救救我们！"],["哼！没用的！"],[function():void
         {
            NpcDialog.show(NPC.QICAIMOGU,["你们叫破喉咙也没用！这可是芙兰希儿大人的领域！"],["会有的！"],[function():void
            {
               NpcDialog.show(NPC.ZHUERNIAO,["一定会有一位大侠来救我们的！我们会永远跟随他的左右！"],["乖乖的承受冰冻之刑吧！"],[function():void
               {
                  AnimateManager.playMcAnimate(_map.conLevel["zhuerniao"],2,"mc2",function():void
                  {
                     NpcDialog.show(NPC.SEER,["哇，好漂亮的大蘑菇！"],["救救我们！"],[function():void
                     {
                        NpcDialog.show(NPC.ZHUERNIAO,["这里是芙兰希儿的领地，我们因为得罪了她被罚绑在这玄冰大蘑菇上！"],["太残忍了！我来帮你！"],[function():void
                        {
                           NpcDialog.show(NPC.ZHUERNIAO,["不要小看这机关！这是传说中的碧火玄冰蘑菇锁！只有找到碧水玄冰才能熄灭碧火，打开玄冰蘑菇锁！"],["碧水玄冰在哪里？"],[function():void
                           {
                              NpcDialog.show(NPC.ZHUERNIAO,["碧水玄冰由芙兰希儿的巡逻队看守，他们在0xff0000" + timeStr + "xffffff会来这里巡逻！"],["恩，到时候我一定来！"],[function():void
                              {
                                 BufferRecordManager.setState(MainManager.actorInfo,564,true);
                              }]);
                           }]);
                        }]);
                     }]);
                  });
               }]);
            }]);
         }]);
      }
      
      private static function onFireClick(param1:MouseEvent) : void
      {
         var fire:MovieClip = null;
         var e:MouseEvent = param1;
         if(isInActive)
         {
            fire = MovieClip(e.currentTarget);
            ItemManager.addEventListener(ItemEvent.COLLECTION_LIST,function(param1:ItemEvent):void
            {
               var itemInfo:SingleItemInfo;
               var e:ItemEvent = param1;
               ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST,arguments.callee);
               itemInfo = ItemManager.getCollectionInfo(1200081);
               if(Boolean(itemInfo) && itemInfo.itemNum >= 10)
               {
                  AnimateManager.playMcAnimate(fire,2,"fire2",function():void
                  {
                     SocketConnection.addCmdListener(CommandID.UPDATE_FIRE_STATE,function(param1:SocketEvent):void
                     {
                        var data:ByteArray;
                        var num:uint;
                        var num2:uint;
                        var hasFire:Boolean;
                        var i:uint;
                        var e:SocketEvent = param1;
                        SocketConnection.removeCmdListener(CommandID.UPDATE_FIRE_STATE,arguments.callee);
                        data = e.data as ByteArray;
                        num = data.readUnsignedInt();
                        num2 = data.readUnsignedInt();
                        if(num2 == 1)
                        {
                           if(!_map.conLevel["zhuerniao2"].visible)
                           {
                              _map.conLevel["zhuerniao2"].visible = true;
                           }
                        }
                        fire.visible = false;
                        hasFire = false;
                        i = 1;
                        while(i <= 3)
                        {
                           if(_map.conLevel["fire" + i].visible)
                           {
                              hasFire = true;
                           }
                           i++;
                        }
                        if(!hasFire)
                        {
                           AnimateManager.playMcAnimate(_map.conLevel["bigmushroom"]["bigmushroom2"],1,"mushroom",function():void
                           {
                              CommonUI.addYellowArrow(_map.topLevel,385,60);
                              _step = 3;
                              _map.conLevel["mushroom3"].visible = true;
                              _map.conLevel["mushroomtxt3"].visible = true;
                              _map.conLevel["mushroom4"].visible = true;
                              _map.conLevel["mushroomtxt4"].visible = true;
                           });
                        }
                     });
                     SocketConnection.send(CommandID.UPDATE_FIRE_STATE);
                  });
               }
               else
               {
                  SimpleAlarm.show("碧水玄冰不足10个，快去与阿彩、彩色菇战斗吧！");
               }
            });
            ItemManager.upDateCollection(1200081);
         }
      }
      
      public static function destroy() : void
      {
         if(!_map || _isFighting)
         {
            return;
         }
         var _loc1_:uint = 1;
         while(_loc1_ <= 4)
         {
            _map.conLevel["mushroom" + _loc1_].removeEventListener(MouseEvent.CLICK,onMushRoomClick);
            _loc1_++;
         }
         _map.conLevel["zhuerniao"].removeEventListener(MouseEvent.CLICK,onBirdClick);
         _map.conLevel["zhuerniao2"].removeEventListener(MouseEvent.CLICK,onBird2Click);
         _map.conLevel["luoya"].removeEventListener(MouseEvent.CLICK,onLuoYaClick);
         _map.conLevel["funanxier"].removeEventListener(MouseEvent.CLICK,onFuNanXiErClick);
         var _loc2_:uint = 1;
         while(_loc2_ <= 3)
         {
            _map.conLevel["fire" + _loc2_].removeEventListener(MouseEvent.CLICK,onFireClick);
            _loc2_++;
         }
         SocketConnection.removeCmdListener(CommandID.GET_SPECIAL_EVENT_NOTIFICATION,onGetMsg);
         _map = null;
      }
      
      public static function get actID() : String
      {
         return "20120502_allenjiang_juemingya";
      }
   }
}
