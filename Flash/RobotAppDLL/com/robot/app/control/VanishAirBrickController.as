package com.robot.app.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import com.robot.core.utils.CronTimeVo;
   import com.robot.core.utils.NumberUtils;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.MovieClip;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   
   public class VanishAirBrickController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _checkVal:uint;
      
      private static var _cTime1:CronTimeVo = new CronTimeVo("*","12-13","*","*","*","*");
      
      private static var _cTime2:CronTimeVo = new CronTimeVo("*","18-19","*","*","*","*");
      
      public static var _brickNum:uint;
       
      
      public function VanishAirBrickController()
      {
         super();
      }
      
      public static function initForMap68(param1:BaseMapProcess) : void
      {
         _map = param1;
         addBrickClickListener();
         if(isActiveTime)
         {
            onCheck();
         }
         else
         {
            BufferRecordManager.setState(MainManager.actorInfo,545,false);
            BufferRecordManager.setState(MainManager.actorInfo,546,false);
            taskMC.visible = false;
         }
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onSysTime);
      }
      
      private static function onSysTime(param1:SocketEvent) : void
      {
         if(isActiveTime)
         {
            onCheck();
         }
         else
         {
            BufferRecordManager.setState(MainManager.actorInfo,545,false);
            BufferRecordManager.setState(MainManager.actorInfo,546,false);
            taskMC.visible = false;
         }
      }
      
      private static function onCheck() : void
      {
         var temp:Number = NaN;
         var t:uint = 0;
         var minute:Number = Number(SystemTimerManager.sysDate.minutes);
         if(BufferRecordManager.getState(MainManager.actorInfo,545) == false)
         {
            temp = Number(NumberUtils.random(1000,3000));
            t = setTimeout(function():void
            {
               clearTimeout(t);
               AnimateManager.playMcAnimate(mapMC,1,"mc1",function():void
               {
                  BufferRecordManager.setState(MainManager.actorInfo,545,true);
               });
            },temp);
         }
         if(BufferRecordManager.getState(MainManager.actorInfo,547) == false)
         {
            if(minute % 10 == 0)
            {
               taskMC.visible = true;
               AnimateManager.playMcAnimate(taskMC,1,"mc1",function():void
               {
                  taskMC.mouseChildren = taskMC.mouseEnabled = taskMC.buttonMode = true;
                  MapListenerManager.add(taskMC,function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,3,"mc3",function():void
                     {
                        MapListenerManager.add(taskMC,function():void
                        {
                           addListener();
                        });
                     });
                  });
               });
            }
            else if(minute % 10 < 2)
            {
               if(BufferRecordManager.getState(MainManager.actorInfo,546) == true)
               {
                  taskMC.visible = false;
               }
               else
               {
                  taskMC.visible = true;
                  AnimateManager.playMcAnimate(taskMC,1,"mc1",function():void
                  {
                     MapListenerManager.add(taskMC,function():void
                     {
                        taskMC.mouseChildren = taskMC.mouseEnabled = taskMC.buttonMode = true;
                        AnimateManager.playMcAnimate(taskMC,3,"mc3",function():void
                        {
                           MapListenerManager.add(taskMC,function():void
                           {
                              addListener();
                           });
                        });
                     });
                  },true);
               }
            }
            else if(minute % 10 == 2)
            {
               if(BufferRecordManager.getState(MainManager.actorInfo,546) == true)
               {
                  taskMC.visible = false;
               }
               else
               {
                  taskMC.visible = true;
                  AnimateManager.playMcAnimate(taskMC,2,"mc2",function():void
                  {
                     taskMC.visible = false;
                  });
               }
            }
            else if(minute % 10 > 2)
            {
               taskMC.visible = false;
               BufferRecordManager.setState(MainManager.actorInfo,546,false);
            }
         }
      }
      
      private static function addListener() : void
      {
         SocketConnection.addCmdListener(CommandID.VANISH_AIR_BRICK_GET_BRICK,onGetBrick);
         SocketConnection.send(CommandID.VANISH_AIR_BRICK_GET_BRICK);
      }
      
      private static function onGetBrick(param1:SocketEvent) : void
      {
         BufferRecordManager.setState(MainManager.actorInfo,546,true);
         ItemInBagAlert.show(1200533,"你获得了1个" + TextFormatUtil.getRedTxt(ItemXMLInfo.getName(1200533)) + "！");
         taskMC.visible = false;
      }
      
      private static function addBrickClickListener() : void
      {
         SocketConnection.send(1022,86054753);
         mapMC.buttonMode = mapMC.mouseChildren = mapMC.mouseEnabled = true;
         MapListenerManager.add(mapMC,function():void
         {
            if(isActiveTime)
            {
               checkBrick();
            }
            else
            {
               ModuleManager.showModule(ClientConfig.getAppModule("VanishAirBrickPanel"));
            }
         });
         MapListenerManager.add(stone,function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("VanishAirBrickPanel"));
         });
      }
      
      public static function get isActiveTime() : Boolean
      {
         var _loc1_:Date = SystemTimerManager.sysDate;
         if(_cTime1.checkTimeHit(_loc1_) == CronTimeVo.HIT || _cTime2.checkTimeHit(_loc1_) == CronTimeVo.HIT)
         {
            return true;
         }
         return false;
      }
      
      private static function get stone() : MovieClip
      {
         return _map.conLevel["stone"];
      }
      
      private static function get mapMC() : MovieClip
      {
         return _map.conLevel["mapMC"];
      }
      
      private static function get taskMC() : MovieClip
      {
         return _map.conLevel["taskMC"];
      }
      
      public static function playMC() : void
      {
         taskMC.visible = false;
         BufferRecordManager.setState(MainManager.actorInfo,547,true);
         AnimateManager.playMcAnimate(mapMC,2,"mc2",function():void
         {
            MapListenerManager.add(mapMC,function():void
            {
               SocketConnection.addCmdListener(CommandID.VANISH_AIR_BRICK_CHALLENGE,onChallenge);
               SocketConnection.send(CommandID.VANISH_AIR_BRICK_CHALLENGE,0);
            });
         });
      }
      
      private static function onChallenge(param1:SocketEvent) : void
      {
         FightDispatcher.addEventListener(PetFightEvent.CATCH_PET,onCatchPet);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onAlarmClick);
         FightManager.fightWithBoss("派尔高",0);
      }
      
      private static function onCatchPet(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.CATCH_PET,onCatchPet);
         AnimateManager.playMcAnimate(mapMC,3,"mc3",function():void
         {
         });
      }
      
      private static function onAlarmClick(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onAlarmClick);
         AnimateManager.playMcAnimate(mapMC,4,"mc4",function():void
         {
            BufferRecordManager.setState(MainManager.actorInfo,547,false);
            addBrickClickListener();
         });
      }
      
      public static function checkBrick() : void
      {
         ItemManager.addEventListener(ItemEvent.COLLECTION_LIST,onGetMaxHit);
         ItemManager.upDateCollection(1200533);
      }
      
      private static function onGetMaxHit(param1:ItemEvent) : void
      {
         var info:SingleItemInfo;
         var e:ItemEvent = param1;
         ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST,onGetMaxHit);
         info = ItemManager.getCollectionInfo(1200533);
         if(info)
         {
            _brickNum = info.itemNum;
         }
         if(_brickNum >= 7)
         {
            playMC();
         }
         else
         {
            AnimateManager.playMcAnimate(mapMC,5,"mc5",function():void
            {
               BufferRecordManager.setState(MainManager.actorInfo,547,false);
            });
         }
      }
      
      public static function destroy() : void
      {
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onSysTime);
      }
   }
}
