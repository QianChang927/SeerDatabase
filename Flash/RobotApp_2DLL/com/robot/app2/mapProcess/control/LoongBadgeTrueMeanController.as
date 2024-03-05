package com.robot.app2.mapProcess.control
{
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.YunyunAndFriendGameController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class LoongBadgeTrueMeanController
   {
      
      private static const _mapAnimate:String = "LoongBadgeTrueMeanAnmiate";
      
      private static const buffIDs:Array = [23050,23051,23052];
      
      private static var _taskMc:MovieClip;
      
      private static var _process:uint;
       
      
      public function LoongBadgeTrueMeanController()
      {
         super();
      }
      
      private static function loadTaskMc(param1:Function) : void
      {
         var fun:Function = param1;
         if(_taskMc == null)
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate(_mapAnimate),function(param1:MovieClip):void
            {
               _taskMc = param1;
               _taskMc.addEventListener(MouseEvent.CLICK,onTask);
               if(fun != null)
               {
                  fun();
               }
            });
         }
         else if(fun != null)
         {
            fun();
         }
      }
      
      private static function onTask(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         switch(e.target.name)
         {
            case "btn_0":
               if(_process == 0)
               {
                  NpcDialog.show(NPC.MODUO,["我能感受到他的失望，我确实没有力量与那个徽章产生共鸣。"],["不要太难过……我能帮你什么？"],[function():void
                  {
                     NpcDialog.show(NPC.MODUO,["我听到徽章落地的时候发出了破碎的声音，那里面一定有东西被震碎了，你能不能帮我补齐它？让我知道，它到底想告诉我什么……"],["我去看看。"],[function():void
                     {
                        _process = 1;
                        CommonUI.removeYellowArrow(MapManager.currentMap.topLevel);
                        CommonUI.addYellowArrow(MapManager.currentMap.topLevel,415,340,0);
                        BitBuffSetClass.setState(buffIDs[0],1);
                     }]);
                  }]);
               }
               else if(_process == 1)
               {
                  NpcDialog.show(NPC.MODUO,["那里面…..到底是什么被震碎了，我根本不敢去看….."],["别太难过。"],[function():void
                  {
                  }]);
               }
               else
               {
                  NpcDialog.show(NPC.MODUO,["……我…….如果正如你所见，那么就一定是他了！"],["他是谁？"],[function():void
                  {
                     CommonUI.removeYellowArrow(MapManager.currentMap.topLevel);
                     playAnimate(2,function():void
                     {
                        _process = 3;
                        ModuleManager.showAppModule("LoongBadgeTrueMeanPanel");
                        DisplayUtil.removeForParent(_taskMc);
                     });
                  }]);
               }
               break;
            case "btn_0_1":
               if(_process == 1)
               {
                  ModuleManager.showAppModule("LoongBadgePicGamePanel");
               }
               break;
            case "npcBtn_0":
               NpcDialog.show(NPC.QIAOTELUDE,["原来…..这个小家伙就是哈莫。好！我将誓死保卫它，让我们一起来击退这些家伙吧！"],["好！","稍等一下！"],[function():void
               {
                  CommonUI.removeYellowArrow(MapManager.currentMap.topLevel);
                  StatManager.sendStat2014("0122龙纹徽章的真正含义","点击开始游戏","2016运营活动");
                  YunyunAndFriendGameController.startGame("game4");
               }]);
               break;
            case "npcBtn_1":
               NpcDialog.show(NPC.LAMODESI,["你这是自寻死路！我们马上就可以把你撕咬成碎片！快点交出龙王子！"],["．．．．．．这些精灵看起来好凶狠。"],[function():void
               {
               }]);
               break;
            case "npcBtn_2":
               if(_process == 3)
               {
                  NpcDialog.show(NPC.QIAOTELUDE,["时间的确会将你的容颜老去，但希望你的内心永远炽热，请打开地上的徽章。"],["如何打开？"],[function():void
                  {
                     NpcDialog.show(NPC.QIAOTELUDE,["你轻轻一碰，它就开了，我已经知道里面是什么了，但我希望你能够亲眼见证历史的轮换！"],["好！"],[function():void
                     {
                        CommonUI.removeYellowArrow(MapManager.currentMap.topLevel);
                        CommonUI.addYellowArrow(MapManager.currentMap.topLevel,481,309,0);
                        _process = 4;
                     }]);
                  }]);
               }
               else
               {
                  NpcDialog.show(NPC.QIAOTELUDE,["跟时间相比，我们竟然这般渺小……"],["是的。"],[function():void
                  {
                  }]);
               }
               break;
            case "npcBtn_3":
               CommonUI.removeYellowArrow(MapManager.currentMap.topLevel);
               ModuleManager.showAppModule("LoongBadgeTrueEndPanel");
         }
      }
      
      public static function endSetp1() : void
      {
         _process = 2;
         CommonUI.removeYellowArrow(MapManager.currentMap.topLevel);
         CommonUI.addYellowArrow(MapManager.currentMap.topLevel,322,238,0);
      }
      
      public static function startSetp1() : void
      {
         StatManager.sendStat2014("0122龙纹徽章的真正含义","点击前往龙垩纪","2016运营活动");
         if(BitBuffSetClass.getState(buffIDs[0]) == 0)
         {
            _process = 0;
            loadTaskMc(function():void
            {
               MapManager.currentMap.topLevel.addChild(_taskMc);
               playAnimate(1,function():void
               {
                  _taskMc.gotoAndStop(1);
                  _taskMc.mc.gotoAndStop(_taskMc.mc.totalFrames);
                  CommonUI.addYellowArrow(MapManager.currentMap.topLevel,322,238,0);
               });
            });
         }
         else
         {
            loadTaskMc(function():void
            {
               MapManager.currentMap.topLevel.addChild(_taskMc);
               _taskMc.gotoAndStop(1);
               CommonUI.addYellowArrow(MapManager.currentMap.topLevel,415,340,0);
               _taskMc.mc.gotoAndStop(_taskMc.mc.totalFrames);
               _process = 1;
            });
            ModuleManager.showAppModule("LoongBadgePicGamePanel");
         }
      }
      
      public static function startSetp2() : void
      {
         CommonUI.removeYellowArrow(MapManager.currentMap.topLevel);
         StatManager.sendStat2014("0122龙纹徽章的真正含义","点击前往龙湮纪","2016运营活动");
         if(BitBuffSetClass.getState(buffIDs[1]) == 0)
         {
            loadTaskMc(function():void
            {
               MapManager.currentMap.topLevel.addChild(_taskMc);
               playAnimate(3,function():void
               {
                  BitBuffSetClass.setState(buffIDs[1],1);
                  _taskMc.gotoAndStop(3);
                  _taskMc.mc.gotoAndStop(_taskMc.mc.totalFrames);
                  CommonUI.addYellowArrow(MapManager.currentMap.topLevel,340,245,0);
                  CommonUI.addYellowArrow(MapManager.currentMap.topLevel,322,745,0);
               });
            });
         }
         else
         {
            loadTaskMc(function():void
            {
               MapManager.currentMap.topLevel.addChild(_taskMc);
               _taskMc.gotoAndStop(3);
               _taskMc.mc.gotoAndStop(_taskMc.mc.totalFrames);
               CommonUI.addYellowArrow(MapManager.currentMap.topLevel,340,245,0);
               CommonUI.addYellowArrow(MapManager.currentMap.topLevel,322,745,0);
            });
         }
      }
      
      public static function endSetp2() : void
      {
         CommonUI.removeYellowArrow(MapManager.currentMap.topLevel);
         playAnimate(4,function():void
         {
            ModuleManager.showAppModule("LoongBadgeTrueMeanPanel");
            DisplayUtil.removeForParent(_taskMc);
         });
      }
      
      public static function startSetp3() : void
      {
         CommonUI.removeYellowArrow(MapManager.currentMap.topLevel);
         StatManager.sendStat2014("0122龙纹徽章的真正含义","点击前往返回现在","2016运营活动");
         if(BitBuffSetClass.getState(buffIDs[2]) == 0)
         {
            loadTaskMc(function():void
            {
               MapManager.currentMap.topLevel.addChild(_taskMc);
               playAnimate(5,function():void
               {
                  _process = 3;
                  BitBuffSetClass.setState(buffIDs[2],1);
                  _taskMc.gotoAndStop(5);
                  _taskMc.mc.gotoAndStop(_taskMc.mc.totalFrames);
                  CommonUI.addYellowArrow(MapManager.currentMap.topLevel,322,238,0);
               });
            });
         }
         else
         {
            loadTaskMc(function():void
            {
               MapManager.currentMap.topLevel.addChild(_taskMc);
               _taskMc.gotoAndStop(5);
               _taskMc.mc.gotoAndStop(_taskMc.mc.totalFrames);
               CommonUI.removeYellowArrow(MapManager.currentMap.topLevel);
               CommonUI.addYellowArrow(MapManager.currentMap.topLevel,481,309,0);
               _process = 4;
            });
         }
      }
      
      public static function endSetp3() : void
      {
         CommonUI.removeYellowArrow(MapManager.currentMap.topLevel);
         playAnimate(6,function():void
         {
            ModuleManager.showAppModule("LoongBadgeTrueMeanPanel");
            DisplayUtil.removeForParent(_taskMc);
            _taskMc = null;
         });
      }
      
      private static function playAnimate(param1:uint, param2:Function = null) : void
      {
         var frame:uint = param1;
         var fun:Function = param2;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         LevelManager.iconLevel.visible = false;
         MapNamePanel.hide();
         AnimateManager.playMcAnimate(_taskMc,frame,"mc",function():void
         {
            KTool.showMapAllPlayerAndMonster();
            MapNamePanel.show();
            MapObjectControl.hideOrShowAllObjects(true);
            LevelManager.iconLevel.visible = true;
            if(fun != null)
            {
               fun();
            }
         });
      }
   }
}
