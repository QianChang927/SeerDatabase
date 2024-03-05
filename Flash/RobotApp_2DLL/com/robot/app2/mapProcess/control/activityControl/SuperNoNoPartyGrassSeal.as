package com.robot.app2.mapProcess.control.activityControl
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.app.task.taskUtils.taskDialog.DialogUtil;
   import com.robot.app.task.taskUtils.taskDialog.TaskQuneProcessor;
   import com.robot.core.CommandID;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.utils.NumberUtils;
   import flash.display.DisplayObject;
   import flash.display.InteractiveObject;
   import flash.display.MovieClip;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import org.taomee.utils.DisplayUtil;
   
   public class SuperNoNoPartyGrassSeal
   {
      
      public static const WATER:String = "WATER";
      
      public static const FIRE:String = "FIRE";
      
      private static var _ball1:MovieClip;
      
      private static var _ball2:MovieClip;
       
      
      public function SuperNoNoPartyGrassSeal()
      {
         super();
      }
      
      public static function initForMap665() : void
      {
         _ball1 = MapManager.currentMap.controlLevel["ball1"];
         _ball2 = MapManager.currentMap.controlLevel["ball2"];
         MapListenerManager.add(_ball1,null,"快使用头部射击打破气泡吧！");
         MapListenerManager.add(_ball2,null,"快使用头部射击打破气泡吧！");
         DisplayUtil.removeForParent(_ball1);
         DisplayUtil.removeForParent(_ball2);
         MapListenerManager.add(xianjingzhanglao as InteractiveObject,onXianjingzhanglaoClick);
         MapListenerManager.add(sealBtn as InteractiveObject,function(param1:*):void
         {
            SocketConnection.send(1022,86053937);
            ModuleManager.showModule(ClientConfig.getAppModule("SuperNOGrassSealIntroductPanel"));
         });
         MapListenerManager.add(fireStoneMC as InteractiveObject,function(param1:*):void
         {
            SocketConnection.send(1022,86053941);
            ModuleManager.showModule(ClientConfig.getAppModule("FirePetCatchPanel"));
         });
         MapListenerManager.add(waterStoneMC as InteractiveObject,function(param1:*):void
         {
            SocketConnection.send(1022,86053940);
            ModuleManager.showModule(ClientConfig.getAppModule("WaterPetCatchPanel"));
         });
         MapListenerManager.add(panelBtn as InteractiveObject,function(param1:*):void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("InevitableBattleNavPanel"));
         });
         AimatController.addEventListener(AimatEvent.PLAY_END,onShoot);
         if(!hasFinishPreTsk())
         {
            enableBtns(false);
         }
         if(TasksManager.getTaskStatus(1327) == TasksManager.COMPLETE)
         {
            expBtn.visible = false;
         }
         else
         {
            MapListenerManager.add(expBtn as InteractiveObject,function(param1:*):void
            {
               var e:* = param1;
               TasksManager.accept(1327,function():void
               {
                  TasksManager.complete(1327,0,function():void
                  {
                     expBtn.visible = false;
                  });
               });
            });
         }
      }
      
      private static function enableBtns(param1:Boolean) : void
      {
         guideMC.visible = expBtn.visible = sealBtn.visible = fireStoneMC.visible = waterStoneMC.visible = param1;
      }
      
      private static function onShoot(param1:*) : void
      {
         var name:String = null;
         var region:int = 0;
         var ball:MovieClip = null;
         var e:* = param1;
         var number:Number = Number(NumberUtils.random(0,100));
         var point:Point = e.info.endPos;
         if(_ball1.parent != null && _ball1.hitTestPoint(point.x,point.y))
         {
            ball = _ball1;
            if(number <= 1)
            {
               name = "小火雀";
               region = 6;
            }
            else if(number > 1 && number <= 20)
            {
               name = "福克斯";
               region = 7;
            }
            else if(number > 20 && number <= 40)
            {
               name = "炎魔";
               region = 8;
            }
            else if(number > 40 && number <= 60)
            {
               name = "暗金炎魔";
               region = 9;
            }
            else if(number > 60 && number <= 80)
            {
               name = "魔焰猩猩";
               region = 10;
            }
            else if(number > 80 && number <= 100)
            {
               name = "九尾火狐";
               region = 11;
            }
         }
         if(_ball2.parent != null && _ball2.hitTestPoint(point.x,point.y))
         {
            ball = _ball2;
            if(number <= 1)
            {
               name = "小海牙";
               region = 0;
            }
            else if(number > 1 && number <= 20)
            {
               name = "布鲁";
               region = 1;
            }
            else if(number > 20 && number <= 40)
            {
               name = "鱼龙王";
               region = 2;
            }
            else if(number > 40 && number <= 60)
            {
               name = "暗金鱼龙王";
               region = 3;
            }
            else if(number > 60 && number <= 80)
            {
               name = "鲁斯王";
               region = 4;
            }
            else if(number > 80 && number <= 100)
            {
               name = "丽娜丝";
               region = 5;
            }
         }
         if(name != null)
         {
            AnimateManager.playMcAnimate(ball,2,"mc",function():void
            {
               var arg:int = 0;
               DisplayUtil.removeForParent(ball);
               ball.gotoAndStop(1);
               arg = ball == _ball1 ? 2 : 3;
               SocketConnection.sendWithCallback(CommandID.SUPERNO_ICE_SEAL_INFO,function(param1:*):void
               {
                  var _loc3_:int = 0;
                  var _loc4_:int = 0;
                  var _loc2_:ByteArray = param1.data;
                  _loc2_.position = 0;
                  if(arg == 2)
                  {
                     _loc3_ = int(_loc2_.readUnsignedInt());
                  }
                  else
                  {
                     _loc4_ = int(_loc2_.readUnsignedInt());
                  }
                  if((_loc3_ + 1) % 8 == 0 && ball == _ball1)
                  {
                     name = "小火雀";
                     region = 6;
                  }
                  if((_loc4_ + 1) % 15 == 0 && ball == _ball2)
                  {
                     name = "小海牙";
                     region = 0;
                  }
                  FightManager.fightWithBoss(name,region);
               },arg);
            });
         }
      }
      
      public static function showBall(param1:String) : void
      {
         if(param1 == FIRE)
         {
            MapManager.currentMap.controlLevel.addChild(_ball1);
         }
         else
         {
            MapManager.currentMap.controlLevel.addChild(_ball2);
         }
      }
      
      public static function onXianjingzhanglaoClick(param1:*) : void
      {
         var dArr:Array = null;
         var e:* = param1;
         if(MainManager.actorInfo.isVip)
         {
            if(hasFinishPreTsk())
            {
               dArr = [[NPC.XIANJING_ZHANGLAO,["终于找到有缘人了，赛尔勇士，快去帮助我们的五行仙境草系使者小树苗解开封印吧！"],["嗯嗯"]]];
               DialogUtil.playDilogs(dArr,[function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("SuperNOGroundSealIntroductPanel"));
               }]);
            }
            else
            {
               playPreTask();
            }
         }
         else
         {
            dArr = [[NPC.XIANJING_ZHANGLAO,["哎，真遗憾，没有超能NoNo的能量是无法解开五行封印的，你只能与外形可爱、实力强大的五行精灵失之交臂了！"],["我要充值超能NoNo","我是来看风景的！"]]];
            DialogUtil.playDilogs(dArr,[function():void
            {
               LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
            }]);
         }
      }
      
      public static function playPreTask() : void
      {
         var taskQunePro:TaskQuneProcessor = null;
         taskQunePro = new TaskQuneProcessor();
         taskQunePro.addFullMv(ClientConfig.getFullMovie("active20130111_4"));
         taskQunePro.procesEndFun = function():void
         {
            SocketConnection.send(1022,86053936);
            taskQunePro.destory();
            BufferRecordManager.setState(MainManager.actorInfo,516,true,function():void
            {
               enableBtns(true);
            });
         };
         taskQunePro.start();
      }
      
      private static function hasFinishPreTsk() : Boolean
      {
         return BufferRecordManager.getState(MainManager.actorInfo,516);
      }
      
      private static function get xianjingzhanglao() : DisplayObject
      {
         return MapManager.currentMap.depthLevel["npcMC"];
      }
      
      private static function get sealBtn() : DisplayObject
      {
         return MapManager.currentMap.controlLevel["sealBtn"];
      }
      
      private static function get fireStoneMC() : DisplayObject
      {
         return MapManager.currentMap.controlLevel["fireStoneMC"];
      }
      
      private static function get waterStoneMC() : DisplayObject
      {
         return MapManager.currentMap.controlLevel["waterStoneMC"];
      }
      
      private static function get expBtn() : DisplayObject
      {
         return MapManager.currentMap.controlLevel["expBtn"];
      }
      
      private static function get panelBtn() : DisplayObject
      {
         return MapManager.currentMap.controlLevel["panelBtn"];
      }
      
      private static function get guideMC() : DisplayObject
      {
         return MapManager.currentMap.controlLevel["guideMC"];
      }
      
      public static function destory() : void
      {
         _ball1 = _ball2 = null;
         AimatController.removeEventListener(AimatEvent.PLAY_END,onShoot);
      }
   }
}
