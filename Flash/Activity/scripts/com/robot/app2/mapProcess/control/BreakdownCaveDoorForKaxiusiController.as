package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskQuneProcessor;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.AimatInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class BreakdownCaveDoorForKaxiusiController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var taskMc:MovieClip;
      
      private static var hitCount:uint = 0;
       
      
      public function BreakdownCaveDoorForKaxiusiController()
      {
         super();
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         SocketConnection.send(1022,86070391);
         _map = map;
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_982_1"),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map.conLevel.addChild(taskMc);
            taskMc.gotoAndStop(8);
            taskMc["mc8"].gotoAndStop(1);
            addEvent();
         });
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
      }
      
      private static function fightOverHandler(param1:*) : void
      {
         if(MapManager.currentMap.id != 982)
         {
            return;
         }
         if(FightManager.currentBossRegion >= 939 && FightManager.currentBossRegion <= 944)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("BreakdownCaveDoorForSuokateFightPanel"));
         }
      }
      
      private static function addEvent() : void
      {
         MapListenerManager.add(taskMc["mc8"]["maiKangNa"],npcDialog2,"麦康纳");
         MapListenerManager.add(taskMc["mc8"]["suokate"],onSuokteClick,"索卡特");
      }
      
      public static function onSuokteClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(!BufferRecordManager.getMyState(1089))
         {
            NpcDialog.show(NPC.SUOKATE,[MainManager.actorInfo.formatNick + "，接下来你即将面临勇气的考验，有机会获得卡修斯超进化道具，你敢接受吗？"],["立即出发，开启卡修斯封神之谜！","我不认识卡修斯！"],[function():void
            {
               playSuokatePre();
            }]);
         }
         else if(MapManager.currentMap.id == 982)
         {
            NpcDialog.show(NPC.SUOKATE,[MainManager.actorInfo.formatNick + "，接下来你即将面临勇气的考验，有机会获得卡修斯超进化道具，你敢接受吗？"],["立即出发，开启卡修斯封神之谜！","我不认识卡修斯！"],[function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("BreakdownCaveDoorForSuokateFightPanel"));
            }]);
         }
         else
         {
            MapManager.changeMap(982);
         }
      }
      
      public static function npcDialog1(param1:MouseEvent = null) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.MAIKANGNA,[MainManager.actorInfo.formatNick + "，接受神谕的指引，揭开0xff0000卡修斯封神0xffffff背后真正的谜团，就去魔窟之门接受我们的试炼吧！"],["立即出发，开启卡修斯封神之谜！","我不认识卡修斯！"],[function():void
         {
            MapManager.changeMap(982);
         }]);
      }
      
      public static function npcDialog2(param1:MouseEvent = null) : void
      {
         var e:MouseEvent = param1;
         if(!BufferRecordManager.getMyState(1084))
         {
            NpcDialog.show(NPC.MAIKANGNA,[MainManager.actorInfo.formatNick + "，来到魔窟之门，想要揭开0xff0000卡修斯封神0xffffff背后真正的谜团，需要接受我们的试炼呢！"],["来吧！我无所畏惧！","我走错了！"],[function():void
            {
               doPre();
            }]);
         }
         else if(!BufferRecordManager.getMyState(1089))
         {
            playSuokatePre();
         }
         else if(e.currentTarget.name == "maiKangNa")
         {
            NpcDialog.show(NPC.MAIKANGNA,["接受正义的试炼吧！卡修斯封神之谜，等着你去揭开！"],["我一定可以做到！"],[function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("BreakdownCaveDoorForKaxiusiPanel1"));
            }]);
         }
         else if(e.currentTarget.name == "chuangShiBingHun")
         {
            NpcDialog.show(NPC.CHUANGSIBINGHUN,["麦康纳是创世之神的坐骑之一！完成他的正义试炼，就能够拥有它哦！"],["我一定可以做到！"],[function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("BreakdownCaveDoorForKaxiusiPanel1"));
            }]);
         }
      }
      
      private static function doPre() : void
      {
         MainManager.actorModel.pos = new Point(355,385);
         MainManager.actorModel.visible = false;
         AnimateManager.playMcAnimate(taskMc,2,"mc2",function():void
         {
            NpcDialog.show(NPC.SEER,["麦康纳？刚才的那只神鹿就是麦康纳？"],["是的！"],[function():void
            {
               NpcDialog.show(NPC.CHUANGSIBINGHUN,["传说中神鹿麦康纳与另外二者是创世之神的三大坐骑！实力非凡！"],["创世兵魂，久违了！"],[function():void
               {
                  NpcDialog.show(NPC.MAIKANGNA,["既然来到了这里，想要知道卡修斯封神之谜，先让我见识你们的实力！"],["（射击石门，召唤麦康纳）"],[function():void
                  {
                     taskMc.gotoAndStop(3);
                     taskMc["blood"].gotoAndStop(1);
                     AimatController.addEventListener(AimatEvent.PLAY_END,continuePre);
                     AimatController.start(0);
                  }]);
               }]);
            }]);
         });
      }
      
      private static function continuePre(param1:AimatEvent) : void
      {
         var e:AimatEvent = param1;
         var info:AimatInfo = e.info as AimatInfo;
         if(MainManager.actorID != info.userID)
         {
            return;
         }
         if(taskMc["door"].hitTestPoint(info.endPos.x,info.endPos.y))
         {
            ++hitCount;
            taskMc["blood"].gotoAndStop(hitCount + 1);
         }
         if(hitCount >= 3)
         {
            AimatController.removeEventListener(AimatEvent.PLAY_END,continuePre);
            taskMc.gotoAndStop(4);
            AnimateManager.playMcAnimate(taskMc,4,"mc4",function():void
            {
               NpcDialog.show(NPC.MAIKANGNA,["那你是否拥有正义呢？"],["我们是正义的赛尔号成员！"],[function():void
               {
                  NpcDialog.show(NPC.MAIKANGNA,["有时候最大的敌人是自己的心，让我考验你的正义感吧！"],["怎么考验？"],[function():void
                  {
                     AnimateManager.playMcAnimate(taskMc,5,"mc5",function():void
                     {
                        taskMc.gotoAndStop(5);
                        BufferRecordManager.setMyState(1084,true);
                        SocketConnection.send(43059,1,0);
                        SocketConnection.send(1022,86070392);
                        taskMc["mc5"].gotoAndStop(1);
                        MapListenerManager.add(taskMc["mc5"]["maiKangNa"],npcDialog2,"麦康纳");
                        MapListenerManager.add(taskMc["mc5"]["chuangShiBingHun"],npcDialog2,"创世兵魂");
                        MainManager.actorModel.visible = true;
                        ModuleManager.showModule(ClientConfig.getAppModule("BreakdownCaveDoorForKaxiusiPanel1"));
                     });
                  }]);
               }]);
            });
         }
         else
         {
            AimatController.start(0);
         }
      }
      
      private static function playSuokatePre() : void
      {
         var taskQuePro:TaskQuneProcessor;
         var d1:Array;
         KTool.hideMapAllPlayerAndMonster();
         taskQuePro = new TaskQuneProcessor();
         taskQuePro.addChangeMap(982);
         d1 = [[NPC.SEER,["索卡特？","是的！"]],[NPC.SUOKATE,["接下来你即将面临勇气的试炼，你敢接受吗!","我敢接受！"]]];
         taskQuePro.addMapMv(taskMc,6,"mc6");
         taskQuePro.addDialog(d1);
         taskQuePro.addFullMv(ClientConfig.getFullMovie("active_20140321_3"));
         taskQuePro.addMapMv(taskMc,7,"mc7");
         taskQuePro.procesEndFun = function():void
         {
            SocketConnection.send(CommandID.PETACTIVE_201401_LOGIN,1,0);
            taskMc.gotoAndStop(8);
            KTool.showMapAllPlayerAndMonster();
            ToolBarController.showOrHideAllUser(ToolBarController.panel.panelIsShow);
            BufferRecordManager.setMyState(1089,true);
            ModuleManager.showModule(ClientConfig.getAppModule("BreakdownCaveDoorForSuokateFightPanel"));
            addEvent();
         };
         taskQuePro.start();
      }
      
      public static function destroy() : void
      {
         AimatController.removeEventListener(AimatEvent.PLAY_END,continuePre);
         if(taskMc != null)
         {
            DisplayUtil.removeForParent(taskMc);
         }
         taskMc = null;
         _map = null;
      }
   }
}
