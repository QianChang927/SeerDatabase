package com.robot.app.task.taskscollection
{
   import com.robot.app.ogre.OgreController;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.debug.DebugTrace;
   import org.taomee.manager.ToolTipManager;
   
   public class Task1062
   {
      
      private static const TASK_ID:uint = 1062;
      
      private static var _map:BaseMapProcess;
      
      public static var fromMap:Boolean;
       
      
      public function Task1062()
      {
         super();
      }
      
      public static function initTaskForMap62(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         ToolTipManager.add(_map.conLevel["dayAndNightHeart"] as MovieClip,"昼夜之心");
         (_map.conLevel["dayAndNightHeart"] as MovieClip).buttonMode = true;
         ToolTipManager.add(_map.conLevel["baEnNa"] as MovieClip,"巴恩那");
         (_map.conLevel["baEnNa"] as MovieClip).buttonMode = true;
         ToolTipManager.add(_map.conLevel["jieEnSi"] as MovieClip,"杰恩斯");
         (_map.conLevel["jieEnSi"] as MovieClip).buttonMode = true;
         (_map.conLevel["task1062MC"] as MovieClip).gotoAndStop(1);
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.UN_ACCEPT)
         {
            ToolBarController.showOrHideAllUser(true);
            setBrothers(true);
         }
         else if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            setBrothers(false);
            ToolBarController.showOrHideAllUser(false);
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  startPro_0();
               }
            });
         }
         else
         {
            ToolBarController.showOrHideAllUser(true);
            (_map.conLevel["task1062MC"] as MovieClip).visible = true;
            setBrothers(false);
         }
      }
      
      private static function onHeartClick(param1:MouseEvent) : void
      {
         SocketConnection.send(1020,300);
         CommonUI.removeYellowArrow(_map.conLevel["dayAndNightHeart"]);
         ModuleManager.showModule(ClientConfig.getAppModule("CallMaster_MainPanel"),"正在打开面板……");
      }
      
      private static function setBrothers(param1:Boolean) : void
      {
         CommonUI.removeYellowExcal(_map.conLevel["baEnNa"] as MovieClip);
         (_map.conLevel["baEnNa"] as MovieClip).removeEventListener(MouseEvent.CLICK,onStart);
         (_map.conLevel["baEnNa"] as MovieClip).removeEventListener(MouseEvent.CLICK,onEnd);
         CommonUI.removeYellowExcal(_map.conLevel["jieEnSi"] as MovieClip);
         (_map.conLevel["jieEnSi"] as MovieClip).removeEventListener(MouseEvent.CLICK,onStart);
         (_map.conLevel["jieEnSi"] as MovieClip).removeEventListener(MouseEvent.CLICK,onEnd);
         (_map.conLevel["dayAndNightHeart"] as MovieClip).removeEventListener(MouseEvent.CLICK,onStart);
         (_map.conLevel["dayAndNightHeart"] as MovieClip).removeEventListener(MouseEvent.CLICK,onHeartClick);
         if(param1)
         {
            CommonUI.addYellowExcal(_map.conLevel["baEnNa"] as MovieClip,0,0);
            (_map.conLevel["baEnNa"] as MovieClip).addEventListener(MouseEvent.CLICK,onStart);
            CommonUI.addYellowExcal(_map.conLevel["jieEnSi"] as MovieClip,0,0);
            (_map.conLevel["jieEnSi"] as MovieClip).addEventListener(MouseEvent.CLICK,onStart);
            (_map.conLevel["dayAndNightHeart"] as MovieClip).addEventListener(MouseEvent.CLICK,onStart);
         }
         else
         {
            (_map.conLevel["baEnNa"] as MovieClip).addEventListener(MouseEvent.CLICK,onEnd);
            (_map.conLevel["jieEnSi"] as MovieClip).addEventListener(MouseEvent.CLICK,onEnd);
            (_map.conLevel["dayAndNightHeart"] as MovieClip).addEventListener(MouseEvent.CLICK,onHeartClick);
         }
      }
      
      private static function onStart(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         setBrothers(false);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1062_4"),function():void
         {
            NpcDialog.show(NPC.JIEENSI,["邪恶元素的力量太强了，它已经将我们震伤了，我们的能量不够了！！！夜魔，怎么办？难道我们不能完成师父的使命了？"],null,null,false,function():void
            {
               NpcDialog.show(NPC.BAENNA,["这股能量太可怕，足以毁掉一个星球，一定不能让它逃出来！快找人来帮我们恢复能量吧！！"],["哇咔咔，英雄出现，我来帮你们！","哎，我只是逛逛，世界和平不关我的事……"],[function():void
               {
                  TasksManager.accept(TASK_ID,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        startPro_0();
                     }
                  });
               },function():void
               {
                  setBrothers(true);
               }]);
            });
         },false);
      }
      
      public static function startPro_0(param1:MouseEvent = null) : void
      {
         var event:MouseEvent = param1;
         ToolBarController.showOrHideAllUser(false);
         OgreController.isShow = false;
         NpcDialog.show(NPC.JIEENSI,[MainManager.actorInfo.formatNick + "，希望你还能成为昼夜一族的福星！如今我和巴恩那即将力竭干枯！再这样下去我们无法给昼夜之心提供足够的光暗元素，现在只有靠你了！"],["还是那个老问题，我应该怎么做？"],[function():void
         {
            NpcDialog.show(NPC.JIEENSI,["光暗元素可以有一定概率帮我们恢复光暗能量！作为答谢，我们会将自己的精元送给你！"],["好吧！我尽管试试！"],[function():void
            {
               TasksManager.complete(TASK_ID,0,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     DebugTrace.show("1062任务完成！");
                  }
                  ToolBarController.showOrHideAllUser(true);
                  OgreController.isShow = true;
                  CommonUI.addYellowArrow(_map.conLevel["dayAndNightHeart"] as MovieClip,0,0);
               });
            }]);
         }]);
      }
      
      private static function onEnd(param1:MouseEvent) : void
      {
         var _loc2_:String = (param1.currentTarget as MovieClip).name;
         switch(_loc2_)
         {
            case "jieEnSi":
               fromMap = true;
               ModuleManager.showModule(ClientConfig.getAppModule("CallMaster_JieEnSi"),"正在打开面板……",false);
               break;
            case "baEnNa":
               fromMap = true;
               ModuleManager.showModule(ClientConfig.getAppModule("CallMaster_BaEnNa"),"正在打开面板……",false);
         }
      }
      
      public static function destory() : void
      {
         if(_map)
         {
            ToolBarController.showOrHideAllUser(true);
            OgreController.isShow = true;
            _map = null;
         }
      }
   }
}
