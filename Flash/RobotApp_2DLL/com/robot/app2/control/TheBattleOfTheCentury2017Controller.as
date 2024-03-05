package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import org.taomee.events.SocketEvent;
   
   public class TheBattleOfTheCentury2017Controller
   {
       
      
      public function TheBattleOfTheCentury2017Controller()
      {
         super();
      }
      
      private static function openMainPanel(param1:int) : void
      {
         var index:int = param1;
         MapManager.changeMapWithCallback(1,function():void
         {
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            LevelManager.iconLevel.visible = true;
            ToolBarController.panel.visible = true;
            ModuleManager.showModule(ClientConfig.getAppModule("TheBattleOfTheCentury2017ConvenePanel"),"正在打开....",index);
         });
      }
      
      public static function onchick11447Eq() : void
      {
         NpcDialog.show(NPC.GUANGMIRUISI,["你到这里找我所为何事？"],["天火麒麟和魔君索伦森的大战将于1月26日打响，正义需要你的帮助！"],[function():void
         {
            NpcDialog.show(NPC.GUANGMIRUISI,["麒麟是我崇敬的神兽，我一定前去帮忙！"],["谢谢你的正义！"],[function():void
            {
               SocketConnection.addCmdListener(46307,function(param1:SocketEvent):void
               {
                  SocketConnection.removeCmdListener(46307,arguments.callee);
                  Alarm2.show("恭喜你召集成功，麒麟势力+20");
                  openMainPanel(1);
               });
               SocketConnection.send(46307,4,1);
            }]);
         }]);
      }
      
      public static function onchick11448Eq() : void
      {
         NpcDialog.show(NPC.SHENGYUTIANQI,["我知道你前来所求为何，但是光与火的绽放还不是现在！"],["天火麒麟和魔君索伦森的大战将于1月26日打响，正义需要你的帮助！"],[function():void
         {
            NpcDialog.show(NPC.SHENGYUTIANQI,["我早就预见到生命之树的凋零，也许并不是今天。如果你战胜我，我就随你走一遭吧！"],["我要挑战！！","钻石俘获你的芳心！","还是算了！"],[function():void
            {
               FightManager.fightNoMapBoss("圣谕天骑",8880,false,true,function():void
               {
                  if(FightManager.isWin)
                  {
                     Alarm2.show("恭喜你召集成功，麒麟势力+20");
                  }
                  openMainPanel(1);
               });
            },function():void
            {
               KTool.buyProductByCallback(249715,1,function():void
               {
                  SocketConnection.addCmdListener(46307,function(param1:SocketEvent):void
                  {
                     SocketConnection.removeCmdListener(46307,arguments.callee);
                     Alarm2.show("恭喜你召集成功，麒麟势力+20");
                     openMainPanel(1);
                  });
                  SocketConnection.send(46307,4,2);
               },null);
            },function():void
            {
            }]);
         }]);
      }
      
      public static function onchick11449Eq() : void
      {
         NpcDialog.show(NPC.FU_LI_DE,["到这里找我所为何事？如果不是大事，请不要打扰我的修炼！"],["天火麒麟和魔君索伦森的大战将于1月26日打响，正义需要你的帮助！"],[function():void
         {
            NpcDialog.show(NPC.FU_LI_DE,["是时候让四大星系再次见证次元的力量了！！"],["谢谢你的正义！"],[function():void
            {
               SocketConnection.addCmdListener(46307,function(param1:SocketEvent):void
               {
                  SocketConnection.removeCmdListener(46307,arguments.callee);
                  Alarm2.show("恭喜你召集成功，麒麟势力+20");
                  openMainPanel(1);
               });
               SocketConnection.send(46307,4,3);
            }]);
         }]);
      }
      
      public static function onchick11450Eq() : void
      {
         NpcDialog.show(NPC.ZHOUSI,["这神界尚且不够安定，我实在无法分身前往四大星系！"],["天火麒麟和魔君索伦森的大战将于1月26日打响，正义需要你的帮助！"],[function():void
         {
            NpcDialog.show(NPC.ZHOUSI,["生命之树的凋零！或许我该前往一战！但是你需要证明你的实力！"],["我要挑战！！","钻石俘获你的芳心！","还是算了！"],[function():void
            {
               FightManager.fightNoMapBoss("宙斯",8881,false,true,function():void
               {
                  if(FightManager.isWin)
                  {
                     Alarm2.show("恭喜你召集成功，麒麟势力+20");
                  }
                  openMainPanel(1);
               });
            },function():void
            {
               KTool.buyProductByCallback(249715,1,function():void
               {
                  SocketConnection.addCmdListener(46307,function(param1:SocketEvent):void
                  {
                     SocketConnection.removeCmdListener(46307,arguments.callee);
                     Alarm2.show("恭喜你召集成功，麒麟势力+20");
                     openMainPanel(1);
                  });
                  SocketConnection.send(46307,4,4);
               },null);
            },function():void
            {
            }]);
         }]);
      }
      
      public static function onchick11451Eq() : void
      {
         NpcDialog.show(NPC.RUIERSI,["麒麟的事我已经听说了！索伦森那家伙我早就不爽了！"],["天火麒麟和魔君索伦森的大战将于1月26日打响，正义需要你的帮助！"],[function():void
         {
            NpcDialog.show(NPC.RUIERSI,["好了好了！别磨叽，赶紧走吧！"],["谢谢你的正义！"],[function():void
            {
               SocketConnection.addCmdListener(46307,function(param1:SocketEvent):void
               {
                  SocketConnection.removeCmdListener(46307,arguments.callee);
                  Alarm2.show("恭喜你召集成功，麒麟势力+20");
                  openMainPanel(1);
               });
               SocketConnection.send(46307,4,5);
            }]);
         }]);
      }
      
      public static function onchick11452Eq() : void
      {
         NpcDialog.show(NPC.LEIYI,["四大星系是我的家园，我没有理由不守护她！"],["天火麒麟和魔君索伦森的大战将于1月26日打响，正义需要你的帮助！"],[function():void
         {
            NpcDialog.show(NPC.LEIYI,["但是在此之前我想知道现在麒麟的实力是否值得我全力以赴地帮他！"],["我要挑战！！","钻石俘获你的芳心！","还是算了！"],[function():void
            {
               FightManager.fightNoMapBoss("雷伊",8882,false,true,function():void
               {
                  if(FightManager.isWin)
                  {
                     Alarm2.show("恭喜你召集成功，麒麟势力+20");
                  }
                  openMainPanel(1);
               });
            },function():void
            {
               KTool.buyProductByCallback(249715,1,function():void
               {
                  SocketConnection.addCmdListener(46307,function(param1:SocketEvent):void
                  {
                     SocketConnection.removeCmdListener(46307,arguments.callee);
                     Alarm2.show("恭喜你召集成功，麒麟势力+20");
                     openMainPanel(1);
                  });
                  SocketConnection.send(46307,4,6);
               },null);
            },function():void
            {
            }]);
         }]);
      }
      
      public static function onchick11453Eq() : void
      {
         NpcDialog.show(NPC.NISHI_QILIN,["你到这里找我所为何事？"],["魔君索伦森将于1月26日向麒麟发起进攻，魔君大人要你前往观礼！"],[function():void
         {
            NpcDialog.show(NPC.NISHI_QILIN,["魔君召我现世，我自当前去！"],["很好！"],[function():void
            {
               SocketConnection.addCmdListener(46307,function(param1:SocketEvent):void
               {
                  SocketConnection.removeCmdListener(46307,arguments.callee);
                  Alarm2.show("恭喜你召集成功，魔君势力+20");
                  openMainPanel(2);
               });
               SocketConnection.send(46307,5,1);
            }]);
         }]);
      }
      
      public static function onchick11454Eq() : void
      {
         NpcDialog.show(NPC.ZHIZHWUTIAN,["索伦森？我还不是很服他！"],["魔君索伦森将于1月26日向麒麟发起进攻，魔君大人要你前往观礼！"],[function():void
         {
            NpcDialog.show(NPC.ZHIZHWUTIAN,["向我证明你的实力我自会前去！"],["我要挑战！！","钻石俘获你的芳心！","还是算了！"],[function():void
            {
               FightManager.fightNoMapBoss("至尊无天",8883,false,true,function():void
               {
                  if(FightManager.isWin)
                  {
                     Alarm2.show("恭喜你召集成功，魔君势力+20");
                  }
                  openMainPanel(2);
               });
            },function():void
            {
               KTool.buyProductByCallback(249715,1,function():void
               {
                  SocketConnection.addCmdListener(46307,function(param1:SocketEvent):void
                  {
                     SocketConnection.removeCmdListener(46307,arguments.callee);
                     Alarm2.show("恭喜你召集成功，魔君势力+20");
                     openMainPanel(2);
                  });
                  SocketConnection.send(46307,5,2);
               },null);
            },function():void
            {
            }]);
         }]);
      }
      
      public static function onchick11455Eq() : void
      {
         NpcDialog.show(NPC.AOGUSITE,["哦？索伦森的计划实施地这么快！"],["魔君索伦森将于1月26日向麒麟发起进攻，魔君大人要你前往观礼！"],[function():void
         {
            NpcDialog.show(NPC.AOGUSITE,["好好好！我不会错过这场好戏的！"],["很好！"],[function():void
            {
               SocketConnection.addCmdListener(46307,function(param1:SocketEvent):void
               {
                  SocketConnection.removeCmdListener(46307,arguments.callee);
                  Alarm2.show("恭喜你召集成功，魔君势力+20");
                  openMainPanel(2);
               });
               SocketConnection.send(46307,5,3);
            }]);
         }]);
      }
      
      public static function onchick11456Eq() : void
      {
         NpcDialog.show(NPC.DEXTER,["索伦森？我还不是很服他！"],["魔君索伦森将于1月26日向麒麟发起进攻，魔君大人要你前往观礼！"],[function():void
         {
            NpcDialog.show(NPC.DEXTER,["向我证明你的实力我自会前去！"],["我要挑战！！","钻石俘获你的芳心！","还是算了！"],[function():void
            {
               FightManager.fightNoMapBoss("达克斯特",8884,false,true,function():void
               {
                  if(FightManager.isWin)
                  {
                     Alarm2.show("恭喜你召集成功，魔君势力+20");
                  }
                  openMainPanel(2);
               });
            },function():void
            {
               KTool.buyProductByCallback(249715,1,function():void
               {
                  SocketConnection.addCmdListener(46307,function(param1:SocketEvent):void
                  {
                     SocketConnection.removeCmdListener(46307,arguments.callee);
                     Alarm2.show("恭喜你召集成功，魔君势力+20");
                     openMainPanel(2);
                  });
                  SocketConnection.send(46307,5,4);
               },null);
            },function():void
            {
            }]);
         }]);
      }
      
      public static function onchick11457Eq() : void
      {
         NpcDialog.show(NPC.BO_LAI_DE,["索伦森是个值得我放下傲慢的人！"],["魔君索伦森将于1月26日向麒麟发起进攻，魔君大人要你前往观礼！"],[function():void
         {
            NpcDialog.show(NPC.BO_LAI_DE,["好好好！我不会错过这场好戏的！"],["很好！"],[function():void
            {
               SocketConnection.addCmdListener(46307,function(param1:SocketEvent):void
               {
                  SocketConnection.removeCmdListener(46307,arguments.callee);
                  Alarm2.show("恭喜你召集成功，魔君势力+20");
                  openMainPanel(2);
               });
               SocketConnection.send(46307,5,5);
            }]);
         }]);
      }
      
      public static function onchick11458Eq() : void
      {
         NpcDialog.show(NPC.WUCHANYUGUI,["我是泰坦星域之人，四大星系与我何干？"],["魔君索伦森将于1月26日向麒麟发起进攻，魔君大人要你前往观礼！"],[function():void
         {
            NpcDialog.show(NPC.WUCHANYUGUI,["就凭你也有资格向我发号口令？找死！"],["我要挑战！！","钻石俘获你的芳心！","还是算了！"],[function():void
            {
               FightManager.fightNoMapBoss("无常幽鬼",8885,false,true,function():void
               {
                  if(FightManager.isWin)
                  {
                     Alarm2.show("恭喜你召集成功，魔君势力+20");
                  }
                  openMainPanel(2);
               });
            },function():void
            {
               KTool.buyProductByCallback(249715,1,function():void
               {
                  SocketConnection.addCmdListener(46307,function(param1:SocketEvent):void
                  {
                     SocketConnection.removeCmdListener(46307,arguments.callee);
                     Alarm2.show("恭喜你召集成功，魔君势力+20");
                     openMainPanel(2);
                  });
                  SocketConnection.send(46307,5,6);
               },null);
            },function():void
            {
            }]);
         }]);
      }
   }
}
