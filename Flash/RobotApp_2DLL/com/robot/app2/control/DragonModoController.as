package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class DragonModoController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _taskMc:MovieClip;
      
      private static var _mapAnimate:String = "map_674_1";
       
      
      public function DragonModoController()
      {
         super();
      }
      
      public static function initForMap674(param1:BaseMapProcess) : void
      {
         _map = param1;
         checkMap674();
      }
      
      private static function checkMap674() : void
      {
         if(!BitBuffSetClass.getState(22466))
         {
            playStep1();
         }
      }
      
      private static function playStep1() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate(_mapAnimate),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map.conLevel.addChild(taskMc);
            initStep1();
         },"movie");
      }
      
      private static function initStep1() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         _map.depthLevel.visible = false;
         AnimateManager.playMcAnimate(taskMc,1,"mc",function():void
         {
            NpcDialog.show(NPC.HAKESASI,["老龙王！让您看看我现在的力量吧！"],["很好。。。"],[function():void
            {
               NpcDialog.show(NPC.MODUO,["看起来很强大的样子！那么让我看看你的实力究竟如何！"],["请指教。。。"],[function():void
               {
                  initStep2();
               }]);
            }]);
         });
      }
      
      private static function initStep2() : void
      {
         AnimateManager.playMcAnimate(taskMc,2,"mc",function():void
         {
            NpcDialog.show(NPC.YELIMEISI_XIE,["我来这里并无恶意，我们有共同的敌人！只要我们联手，魔灵王一定不是我们的对手！"],["这不可能。。。"],[function():void
            {
               NpcDialog.show(NPC.TACOLIN,["你算什么东西，我们是不可能跟你同流合污的！看我揍扁你！"],["不要轻举妄动！"],[function():void
               {
                  NpcDialog.show(NPC.HAMO_LEITE,["塔克林别冲动，你不是他的对手！老龙王，伊洛维奇是邪恶的，我们不会和他联手的，请您不要阻止我。"],["我痛恨邪恶的化身。。"],[function():void
                  {
                     NpcDialog.show(NPC.MODUO,["伊洛维奇，你欺骗了龙族的王者，实在罪不可恕！给你两个选择，要么快滚，要么留下命来！"],["就凭你们。。"],[function():void
                     {
                        NpcDialog.show(NPC.YELIMEISI_XIE,["虽然你们的实力很强，但是消耗了这么久想必你们的体力不足以和我一战！你这是自寻死路！"],["休得狂妄。。。"],[function():void
                        {
                           initStep3();
                        }]);
                     }]);
                  }]);
               }]);
            }]);
         });
      }
      
      private static function initStep3() : void
      {
         AnimateManager.playMcAnimate(taskMc,3,"mc",function():void
         {
            NpcDialog.show(NPC.MODUO,["啊！啊! 啊！啊！啊！啊！啊！我的头快要裂开了！"],["您这是怎么了？。。"],[function():void
            {
               NpcDialog.show(NPC.HAKESASI,["您怎么了？不要吓唬我们！可恶的伊洛维奇，这笔账我已经要你算清楚！"],["好痛苦。。"],[function():void
               {
                  NpcDialog.show(NPC.MODUO,["好痛苦，我的梦魇要涌出来了，魔能之瞳激发了它的能量，太强大了，我快要控制不住了！"],["！！！！！。。。"],[function():void
                  {
                     initStep4();
                  }]);
               }]);
            }]);
         });
      }
      
      private static function initStep4() : void
      {
         AnimateManager.playMcAnimate(taskMc,4,"mc",function():void
         {
            _map.depthLevel.visible = true;
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            DisplayUtil.removeForParent(taskMc);
            BitBuffSetClass.setState(22466,1);
            CommonUI.addYellowArrow(MapManager.currentMap.topLevel,345,434,0);
         });
      }
      
      public static function initForMap1004(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         ResourceManager.getResource(ClientConfig.getMapAnimate(_mapAnimate),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map.conLevel.addChild(taskMc);
            checkMap1004();
         },"movie");
      }
      
      private static function checkMap1004() : void
      {
         if(!BitBuffSetClass.getState(22467))
         {
            playStep5();
         }
         else
         {
            initNpc();
         }
      }
      
      private static function initNpc() : void
      {
         KTool.getFrameMc(taskMc,taskMc.totalFrames,"mc",function(param1:MovieClip):void
         {
            param1.gotoAndStop(param1.totalFrames);
         });
         taskMc.addEventListener(MouseEvent.CLICK,onClick);
         taskMc.buttonMode = true;
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         switch(param1.target.name)
         {
            case "hakesasi":
               NpcDialog.show(NPC.HAKESASI,[MainManager.actorInfo.formatNick + "，请帮助我夺回摩尔卡洛的力量，让龙王的力量回归现实！感激不尽！"],["我一定尽力。。。。"]);
               break;
            case "moerkaluo":
               ModuleManager.showModule(ClientConfig.getAppModule("DragonModoLeadPanel"));
               break;
            case "shenghuang":
               ModuleManager.showModule(ClientConfig.getAppModule("DragonModoMainPanel"),"",1);
               break;
            case "duogenate":
               ModuleManager.showModule(ClientConfig.getAppModule("DragonModoMainPanel"),"",2);
               break;
            case "fulizi":
               ModuleManager.showModule(ClientConfig.getAppModule("DragonModoMainPanel"),"",3);
               break;
            case "weisike":
               ModuleManager.showModule(ClientConfig.getAppModule("DragonModoMainPanel"),"",4);
         }
      }
      
      private static function playStep5() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active_20140620_1"),function():void
         {
            initStep5();
         });
      }
      
      private static function initStep5() : void
      {
         AnimateManager.playMcAnimate(taskMc,5,"mc",function():void
         {
            NpcDialog.show(NPC.MODUO,["哈莫？你是哈莫？"],["舅舅。。。。"],[function():void
            {
               NpcDialog.show(NPC.HAKESASI,["舅舅？你是龙王摩多吗？你这是怎么了？你的样子。这些黑影是谁？"],["孩子。。。"],[function():void
               {
                  NpcDialog.show(NPC.MODUO,["你怎么进来的？很多年前我已经超进化了，但是一直被困在梦境之中！我的力量被梦魇剥夺了！"],["不要担心。。。"],[function():void
                  {
                     NpcDialog.show(NPC.HAMO_LEITE,["老龙王！我要打败他们把你救出来！"],["就凭你？"],[function():void
                     {
                        initStep6();
                     }]);
                  }]);
               }]);
            }]);
         });
      }
      
      private static function initStep6() : void
      {
         AnimateManager.playMcAnimate(taskMc,6,"mc",function():void
         {
            NpcDialog.show(NPC.MODUO,[MainManager.actorInfo.nick + "，请帮助我夺回摩尔卡洛的力量，让龙王的力量回归现实！感激不尽！"],["我一定尽力。。。。"],[function():void
            {
               KTool.showMapAllPlayerAndMonster();
               MapObjectControl.hideOrShowAllObjects(true);
               BitBuffSetClass.setState(22467,1);
               initNpc();
               SocketConnection.send(46106,2);
            }]);
         });
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
      
      public static function destroy() : void
      {
         DisplayUtil.removeForParent(taskMc);
         if(taskMc)
         {
            taskMc.removeEventListener(MouseEvent.CLICK,onClick);
         }
         taskMc = null;
         _map = null;
      }
   }
}
