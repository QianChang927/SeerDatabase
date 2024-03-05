package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.control.TaskController_799;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.Dictionary;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   
   public class Task799
   {
      
      private static var _map:BaseMapProcess;
      
      private static var roofDic:Dictionary = new Dictionary();
      
      private static var finishCount:int = 0;
      
      private static var dragItem:MovieClip;
       
      
      public function Task799()
      {
         super();
      }
      
      public static function initForMap688(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         TasksManager.getProStatusList(TaskController_799.TASK_ID,function(param1:Array):void
         {
            if(Boolean(param1[0]) && !param1[1])
            {
               _map.conLevel["house_guide"].visible = true;
               _map.conLevel["house_area"].buttonMode = true;
               _map.conLevel["house_area"].addEventListener(MouseEvent.CLICK,onHouseClicked);
               initBreakHouse(false);
               ToolBarController.showOrHideAllUser(false);
            }
            else if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
            {
               initBreakHouse(true);
               ToolBarController.showOrHideAllUser(false);
            }
            else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && !param1[4])
            {
               if(TasksManager.getTaskStatus(TaskController_799.TASK_ID) == TasksManager.ALR_ACCEPT)
               {
                  initForLastStep();
               }
            }
         });
      }
      
      private static function onHouseClicked(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         _map.conLevel["house_guide"].visible = false;
         _map.conLevel["house_area"].mouseEnabled = false;
         _map.conLevel["house_area"].removeEventListener(MouseEvent.CLICK,onHouseClicked);
         NpcDialog.show(NPC.SEER,["哇哦！好美哦，生机盎然的绿色世界。"],null,null,false,function():void
         {
            NpcDialog.show(NPC.SEER,["可有些地方破损不堪，似乎是战斗所遗留的痕迹。"],null,null,false,function():void
            {
               NpcDialog.show(NPC.SEER,["这房子的造型真有趣，里面到底有什么呢？会不会住着新的精灵啊！哈哈哈。"],["（点击房屋敲门）"]);
            });
         });
      }
      
      public static function initBreakHouse(param1:Boolean) : void
      {
         var needInit:Boolean = param1;
         var initRoof:Function = function(param1:MovieClip):void
         {
            param1.gotoAndStop(1);
            param1.buttonMode = true;
            param1.addEventListener(MouseEvent.MOUSE_DOWN,onRoofMSDown);
            roofDic[param1] = new Point(param1.x,param1.y);
         };
         var rf1:MovieClip = _map.conLevel["roof_1"];
         var rf2:MovieClip = _map.conLevel["roof_2"];
         rf1.gotoAndStop(3);
         rf2.gotoAndStop(3);
         if(needInit)
         {
            finishCount = 0;
            initRoof(rf1);
            initRoof(rf2);
            _map.conLevel.addEventListener(MouseEvent.MOUSE_UP,onRoofMSUp);
         }
      }
      
      private static function onRoofMSDown(param1:MouseEvent) : void
      {
         param1.currentTarget.startDrag();
         dragItem = MovieClip(param1.currentTarget);
      }
      
      private static function onRoofMSUp(param1:MouseEvent) : void
      {
         var index:String;
         var hit:MovieClip;
         var e:MouseEvent = param1;
         var clearRoof:Function = function(param1:MovieClip):void
         {
            param1.gotoAndStop(2);
            param1.buttonMode = false;
            param1.removeEventListener(MouseEvent.MOUSE_DOWN,onRoofMSDown);
            ++finishCount;
         };
         if(!dragItem)
         {
            return;
         }
         index = dragItem.name.charAt(5);
         hit = _map.conLevel["roof_hit_" + index];
         if(hit.hitTestObject(dragItem))
         {
            clearRoof(dragItem);
            if(finishCount == 2)
            {
               onFixHouseComp();
            }
         }
         dragItem.stopDrag();
         dragItem.x = roofDic[dragItem].x;
         dragItem.y = roofDic[dragItem].y;
         dragItem = null;
      }
      
      private static function onFixHouseComp() : void
      {
         NpcDialog.show(NPC.SEER,["总算是搞定咯，房子修复得太完美了，我是天才！哈哈哈哈。"],["（与纳多对话）"],[function():void
         {
            TasksManager.complete(TaskController_799.TASK_ID,2);
         }]);
      }
      
      public static function showRuiersi() : void
      {
         var t:uint = 0;
         _map.conLevel["ruiersi"].gotoAndStop(2);
         t = setTimeout(function():void
         {
            clearTimeout(t);
            initForLastStep();
         },6000);
      }
      
      public static function initForLastStep() : void
      {
         _map.conLevel["ruiersi"].buttonMode = true;
         _map.conLevel["ruiersi"].gotoAndStop(3);
         _map.conLevel["ruiersi"].addEventListener(MouseEvent.CLICK,onRuiersiClilcked);
      }
      
      private static function onRuiersiClilcked(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.SEER,["瑞尔斯！你怎么到推特星来了？"],null,null,false,function():void
         {
            NpcDialog.show(NPC.NADUO,["就是他带着另外两个坏蛋乱搞破坏，快说，你们把丹迪怎么了！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.SEER,["瑞尔斯，你为了得到死黑能量，真的已经和海盗成为同伙了？ "],null,null,false,function():void
               {
                  NpcDialog.show(NPC.RUIERSI,["只有先让自己变得强大，才有能力决定命运！"],["你太让我们失望了，你有没有考虑盖亚的感受！"],[function():void
                  {
                     NpcDialog.show(NPC.RUIERSI,["别废话，我的选择，你们没有资格评论！"],["（点击瑞尔斯对战）"],[function():void
                     {
                        FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
                        FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
                        FightManager.fightWithBoss("瑞尔斯",0);
                     }]);
                  }]);
               });
            });
         });
      }
      
      private static function onFightComplete(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         _map.conLevel["ruiersi"].visible = false;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_799_2"),function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_799_4"),function():void
            {
               TasksManager.complete(TaskController_799.TASK_ID,4);
            });
         });
      }
      
      public static function destroy() : void
      {
         var _loc1_:* = undefined;
         _map.conLevel["house_area"].removeEventListener(MouseEvent.CLICK,onHouseClicked);
         _map.conLevel["ruiersi"].removeEventListener(MouseEvent.CLICK,onRuiersiClilcked);
         for(_loc1_ in roofDic)
         {
            _loc1_.removeEventListener(MouseEvent.MOUSE_DOWN,onRoofMSDown);
            delete roofDic[_loc1_];
         }
         _map.conLevel.removeEventListener(MouseEvent.MOUSE_UP,onRoofMSUp);
         ToolBarController.showOrHideAllUser(true);
         _map = null;
      }
   }
}
