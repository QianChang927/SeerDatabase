package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_11326 extends BaseMapProcess
   {
      
      private static var _taskMc:MovieClip;
       
      
      public function MapProcess_11326()
      {
         taskMc;
         super();
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
      
      override protected function init() : void
      {
         this.startPlay();
         super.init();
      }
      
      public function startPlay() : void
      {
         this.topLevel.mouseEnabled = false;
         this.topLevel.mouseChildren = false;
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_resurrectionStarKingWuling"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            taskMc = mc;
            conLevel.addChild(taskMc);
            taskMc.gotoAndStop(3);
            addEvents();
            taskMc.btn_0.buttonMode = true;
            KTool.getMultiValue([4383],function(param1:Array):void
            {
               if(BitUtils.getBit(param1[0],0) > 0)
               {
                  CommonUI.removeYellowArrow(taskMc.btn_0);
               }
               else
               {
                  CommonUI.addYellowArrow(taskMc.btn_0,taskMc.btn_0.width + 10,-10,45);
               }
            });
         });
      }
      
      private function addEvents() : void
      {
         taskMc.addEventListener(MouseEvent.CLICK,this.onDialog);
      }
      
      private function removeEvents() : void
      {
         taskMc.removeEventListener(MouseEvent.CLICK,this.onDialog);
      }
      
      private function onDialog(param1:MouseEvent) : void
      {
         var _loc2_:String = param1.target.name as String;
         switch(_loc2_)
         {
            case "btn_0":
               this.startPreTask(3);
         }
      }
      
      private function startPreTask(param1:int) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var index:int = param1;
         CommonUI.removeYellowArrow(taskMc.btn_0);
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,index,"mc" + index]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            LevelManager.iconLevel.visible = true;
            ToolBarController.panel.visible = true;
            chooseDialog();
         };
         storyPlayer.start();
      }
      
      private function chooseDialog() : void
      {
         NpcDialog.show(NPC.BA_WANG_GUI,["等等，你们要把这石头带到哪儿去？"],["这是星灵石，星灵王的碎片。"],[function():void
         {
            NpcDialog.show(NPC.BA_WANG_GUI,["我不信你们两个陌生人的话，我不会让你们带走这块石头的，除非你们能够证明你们的话。"],["好吧，你问吧。"],[function():void
            {
               NpcDialog.show(NPC.BA_WANG_GUI,["最强的水系精灵是谁？"],["A 利刃之主鲁斯王","B 沧岚","C 霸王龟"],[function():void
               {
                  answerError();
               },function():void
               {
                  answerError();
               },function():void
               {
                  answerRight();
               }]);
            }]);
         }]);
      }
      
      private function answerError() : void
      {
         NpcDialog.show(NPC.BA_WANG_GUI,["答错了！再给你一次机会！最强的水系精灵是谁？"],["A 利刃之主鲁斯王","B 沧岚","C 霸王龟"],[function():void
         {
            answerError();
         },function():void
         {
            answerError();
         },function():void
         {
            answerRight();
         }]);
      }
      
      private function answerRight() : void
      {
         NpcDialog.show(NPC.BA_WANG_GUI,["嗯，你们果然聪明！那就把这块石头带走吧！记住，霸王龟是最强的水系精灵！"],["好的……再见……"],[function():void
         {
            SocketConnection.addCmdListener(46241,function(param1:SocketEvent):void
            {
               var e:SocketEvent = param1;
               SocketConnection.removeCmdListener(46241,arguments.callee);
               Alarm2.show("已获得帕诺星灵石！",function():void
               {
                  DisplayUtil.removeForParent(taskMc);
                  ModuleManager.showModule(ClientConfig.getAppModule("ResurrectionStarKingWulingGetItemPanel"));
               });
            });
            SocketConnection.send(46241,1);
         }]);
      }
      
      override public function destroy() : void
      {
         DisplayUtil.removeForParent(taskMc);
         CommonUI.removeYellowArrow(taskMc.btn_0);
         this.removeEvents();
         super.destroy();
      }
   }
}
