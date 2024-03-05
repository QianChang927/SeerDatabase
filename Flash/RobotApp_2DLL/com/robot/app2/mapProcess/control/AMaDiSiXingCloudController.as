package com.robot.app2.mapProcess.control
{
   import com.robot.app.control.BonusController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class AMaDiSiXingCloudController
   {
      
      private static var animate:Array = [1,3,4,2];
      
      private static var animate_Final:Array = [0,0,0,0,0,0,0,0,1,3];
      
      public static var curTask:int;
      
      private static var isFightNotOver:Boolean;
      
      private static var stepStatus:Array;
      
      private static var first:int;
      
      private static var _taskMc:MovieClip;
      
      private static var _mapAnimate:String = "AMaDiSiXing_Animate";
      
      private static var _FinalMapAnimate:String = "AMaDiSiXing_Animate_Final";
       
      
      public function AMaDiSiXingCloudController()
      {
         super();
      }
      
      private static function loadTaskMc(param1:Function, param2:uint = 1) : void
      {
         var fun:Function = param1;
         var frame:uint = param2;
         if(_taskMc == null)
         {
            if(curTask == 8 || curTask == 9)
            {
               _mapAnimate = _FinalMapAnimate;
            }
            ResourceManager.getResource(ClientConfig.getMapAnimate(_mapAnimate),function(param1:MovieClip):void
            {
               _taskMc = param1;
               _taskMc.gotoAndStop(frame);
               MapManager.currentMap.topLevel.addChild(_taskMc);
               _taskMc.addEventListener(MouseEvent.CLICK,onClick);
               if(fun != null)
               {
                  fun();
               }
            });
         }
         else
         {
            if(_taskMc.parent == null)
            {
               MapManager.currentMap.topLevel.addChild(_taskMc);
            }
            if(fun != null)
            {
               fun();
            }
         }
      }
      
      public static function initForMap() : void
      {
         BonusController.addDelay(1953);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         FightDispatcher.addEventListener(PetFightEvent.ESCAPE,onEscapeOver);
         if(curTask == 8 || curTask == 9)
         {
            loadTaskMc(function():void
            {
               ToolBarController.panel.hide();
               ToolBarController.showOrHideAllUser(false);
               LevelManager.iconLevel.visible = false;
               AnimateManager.playMcAnimate(_taskMc,animate_Final[curTask],"mc",function():void
               {
                  ToolBarController.panel.show();
                  KTool.showMapAllPlayerAndMonster(true);
                  initTask();
               });
            });
         }
         else
         {
            KTool.getMultiValue([3987],function(param1:Array):void
            {
               var values:Array = param1;
               var ss:Array = KTool.intTo4byte(values[0]);
               stepStatus = ss;
               loadTaskMc(function():void
               {
                  ToolBarController.panel.hide();
                  ToolBarController.showOrHideAllUser(false);
                  LevelManager.iconLevel.visible = false;
                  if(stepStatus[curTask] == 0)
                  {
                     AnimateManager.playMcAnimate(_taskMc,animate[curTask],"mc",function():void
                     {
                        ToolBarController.panel.show();
                        KTool.showMapAllPlayerAndMonster(true);
                        SocketConnection.sendWithCallback(45658,function(param1:SocketEvent):void
                        {
                           initTask();
                        },curTask + 1,1);
                     });
                  }
                  else
                  {
                     initTask();
                  }
               });
            });
         }
      }
      
      private static function initTask() : void
      {
         KTool.showMapAllPlayerAndMonster(false);
         if(curTask == 0)
         {
            ++first;
            step0();
         }
         else if(curTask == 1)
         {
            step1();
         }
         else if(curTask == 8)
         {
            step8();
         }
         else if(curTask == 9)
         {
            step9();
         }
         else
         {
            step2();
         }
      }
      
      private static function step8(param1:Function = null) : void
      {
         var fun:Function = param1;
         NpcDialog.show(NPC.QIAN_SHA_MO_XING,["你是什么？哦！！我有记起来了，就是你一直捣乱的！"],null,null,false,function():void
         {
            NpcDialog.show(NPC.SEER,["你不能伤害他们！！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.SITAAO,["小赛尔！你快离开这里！？"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.SEER,["不！我不走！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.GUANGMIRUISI,["……真是愚蠢！你是战胜不了千煞魔星的！"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.SEER,["我……我的确可能战胜不了他！"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.SEER,["但，但我终究要试一试，我的办法！雷伊他们，目前已被大暗黑天围困！我一定要帮助你们！"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.QIAN_SHA_MO_XING,["小东西，我倒要看看，你有什么能耐,不过最后的结果，恐怕是这个星球上，要白白再多一具尸体！"],null,null,false,function():void
                              {
                                 NpcDialog.show(NPC.SEER,["你等着！！"],null,null,false,function():void
                                 {
                                    ToolBarController.panel.hide();
                                    KTool.showMapAllPlayerAndMonster(false);
                                    AnimateManager.playMcAnimate(_taskMc,2,"mc",function():void
                                    {
                                       ToolBarController.panel.show();
                                       KTool.showMapAllPlayerAndMonster(true);
                                       KTool.doExchange(9062,function():void
                                       {
                                          MapManager.changeMapWithCallback(1,function():void
                                          {
                                             ModuleManager.showAppModule("AMaDiSiXingFinalPanel");
                                          });
                                       });
                                    });
                                 });
                              });
                           });
                        });
                     });
                  });
               });
            });
         });
      }
      
      private static function step9(param1:Function = null) : void
      {
         var fun:Function = param1;
         AnimateManager.playMcAnimate(_taskMc,4,"mc",function():void
         {
            ToolBarController.panel.show();
            KTool.showMapAllPlayerAndMonster(true);
            KTool.doExchange(9054 + curTask,function():void
            {
               KTool.doExchange(9064,function():void
               {
                  MapManager.changeMapWithCallback(1,function():void
                  {
                     ModuleManager.showAppModule("AMaDiSiXingFinalPanel");
                  });
               });
            });
         });
      }
      
      private static function step0(param1:Function = null) : void
      {
         var fun:Function = param1;
         if(stepStatus[0] == 2)
         {
            AnimateManager.playMcAnimate(_taskMc,2,"mc",function():void
            {
               SocketConnection.sendWithCallback(45658,function(param1:SocketEvent):void
               {
                  FightManager.tryFight(408,[0,0,0,0]);
               },curTask + 1,3);
            });
         }
         else if(stepStatus[0] == 3)
         {
            _taskMc.gotoAndStop(7);
         }
         else if(first <= 1)
         {
            _taskMc.gotoAndStop(5);
         }
         else
         {
            _taskMc.gotoAndStop(7);
         }
      }
      
      private static function step1(param1:Function = null) : void
      {
         var fun:Function = param1;
         KTool.getMultiValue([3987],function(param1:Array):void
         {
            var values:Array = param1;
            var ss:Array = KTool.intTo4byte(values[0]);
            if(ss[1] == 2)
            {
               SocketConnection.sendWithCallback(45658,function(param1:SocketEvent):void
               {
               },curTask + 1,2);
               MapManager.changeMapWithCallback(1,function():void
               {
                  ModuleManager.showAppModule("AMaDiSiXingCloudPanel");
               });
            }
            else if(ss[1] == 1)
            {
               _taskMc.gotoAndStop(6);
            }
            else
            {
               FightManager.tryFight(409,[0,0,0,0]);
            }
         });
      }
      
      private static function step2(param1:Function = null) : void
      {
         var fun:Function = param1;
         SocketConnection.sendWithCallback(45658,function(param1:SocketEvent):void
         {
         },curTask + 1,2);
         KTool.showMapAllPlayerAndMonster(true);
         MapManager.changeMapWithCallback(1,function():void
         {
            ModuleManager.showAppModule("AMaDiSiXingCloudPanel");
         });
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var index:int = 0;
         var e:MouseEvent = param1;
         index = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "tipusi":
               KTool.getMultiValue([3987],function(param1:Array):void
               {
                  var values:Array = param1;
                  var ss:Array = KTool.intTo4byte(values[0]);
                  if(ss[0] == 3)
                  {
                     FightManager.tryFight(408,[0,0,0,0]);
                  }
                  else
                  {
                     NpcDialog.show(NPC.TIPUSI,["我是截杀者，现在，你打算帮助那个无能的家伙吗？！"],["没错，我一定会帮助他（进入战斗）","给他点钻石算了。（2钻）！","等等，我准备一下。"],[function():void
                     {
                        FightManager.fightNoMapBoss("",7237);
                     },function():void
                     {
                        buyPassGate(247827,index);
                     }]);
                  }
               });
               break;
            case "caca":
               FightManager.tryFight(409,[0,0,0,0]);
               break;
            case "qwe":
               NpcDialog.show(NPC.MIRUISI,["使用我的力量！你不会后悔！"],["好"],[]);
               break;
            case "miruisi":
               NpcDialog.show(NPC.GUANGMIRUISI,["使用我的力量！你不会后悔！"],["好"],[]);
               break;
            case "uiui":
               NpcDialog.show(NPC.SITAAO,["让我们一起击败他吧！"],["好"],[]);
               break;
            case "madan":
               MapManager.changeMapWithCallback(1,function():void
               {
                  ModuleManager.showAppModule("AMaDiSiXingCloudPanel");
               });
         }
      }
      
      private static function buyPassGate(param1:uint, param2:int = 0) : void
      {
         var pid:uint = param1;
         var index:int = param2;
         KTool.buyProductByCallback(pid,1,function():void
         {
            KTool.doExchange(9013,function():void
            {
               startTryFight();
            });
         });
      }
      
      private static function onEscapeOver(param1:PetFightEvent) : void
      {
         var _loc2_:FightOverInfo = param1.dataObj as FightOverInfo;
      }
      
      private static function startTryFight() : void
      {
         SocketConnection.sendWithCallback(45658,function(param1:SocketEvent):void
         {
            var e:SocketEvent = param1;
            AnimateManager.playMcAnimate(_taskMc,2,"mc",function():void
            {
               SocketConnection.sendWithCallback(45658,function(param1:SocketEvent):void
               {
                  FightManager.tryFight(408,[0,0,0,0]);
               },curTask + 1,3);
            });
         },curTask + 1,2);
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         var fightOver:FightOverInfo = null;
         var e:PetFightEvent = param1;
         fightOver = e.dataObj as FightOverInfo;
         KTool.getMultiValue([3987],function(param1:Array):void
         {
            var values:Array = param1;
            var ss:Array = KTool.intTo4byte(values[0]);
            if(ss[0] == 1)
            {
               if(fightOver.winnerID == MainManager.actorID)
               {
                  startTryFight();
               }
               else
               {
                  NpcDialog.show(NPC.MOFUKE,["闪开！不要挡道！！"],["........"],[]);
               }
            }
            else if(ss[0] == 3 && fightOver.winnerID == MainManager.actorID)
            {
               SocketConnection.sendWithCallback(45658,function(param1:SocketEvent):void
               {
               },curTask + 1,4);
               MapManager.changeMapWithCallback(1,function():void
               {
                  ModuleManager.showAppModule("AMaDiSiXingCloudPanel");
               });
            }
            else if(ss[1] == 1 && fightOver.winnerID == MainManager.actorID)
            {
               SocketConnection.sendWithCallback(45658,function(param1:SocketEvent):void
               {
                  var e:SocketEvent = param1;
                  MapManager.changeMapWithCallback(1,function():void
                  {
                     ModuleManager.showAppModule("AMaDiSiXingCloudPanel");
                  });
               },curTask + 1,2);
            }
            isFightNotOver = false;
         });
      }
      
      private static function result1() : void
      {
      }
      
      public static function destroy() : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         if(_taskMc != null)
         {
            _taskMc.removeEventListener(MouseEvent.CLICK,onClick);
            DisplayUtil.removeForParent(_taskMc);
            _taskMc = null;
         }
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.show();
         MapNamePanel.show();
         MainManager.selfVisible = true;
      }
   }
}
