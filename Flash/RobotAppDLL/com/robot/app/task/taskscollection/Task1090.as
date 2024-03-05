package com.robot.app.task.taskscollection
{
   import com.robot.app.ogre.OgreController;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1090
   {
      
      private static const TASK_ID:uint = 1090;
      
      private static var _map:BaseMapProcess;
       
      
      public function Task1090()
      {
         super();
      }
      
      public static function init10(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               ToolBarController.showOrHideAllUser(false);
               OgreController.isShow = false;
               if(!param1[0])
               {
                  initStep0();
               }
               else
               {
                  destroy();
               }
            });
         }
         else if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.UN_ACCEPT)
         {
            initAccept();
         }
         else
         {
            destroy();
         }
      }
      
      private static function initAccept() : void
      {
         taskMC.visible = true;
         taskMC.gotoAndStop(1);
         taskMC.buttonMode = true;
         taskMC.addEventListener(MouseEvent.CLICK,onAcceptHandler);
      }
      
      private static function onAcceptHandler(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.MUMU,["小赛尔！这个六一让我们一起快乐的大狂欢吧！ 0xff0000 6月2日本周六14:30-15:00 0xffffff我还为大家准备了超级好礼！记得来领取哦！"],["我要参加六一赛尔大狂欢！","我只是路过而已！"],[function():void
         {
            taskMC.buttonMode = false;
            taskMC.removeEventListener(MouseEvent.CLICK,onAcceptHandler);
            TasksManager.accept(TASK_ID,function(param1:Boolean = true):void
            {
               if(param1)
               {
                  initStep0();
               }
            });
         },null]);
      }
      
      private static function initStep0() : void
      {
         taskMC.visible = true;
         taskMC.gotoAndStop(2);
         NpcDialog.show(NPC.MUMU,["六一赛尔大狂欢，祭祀木木做主持！整蛊抽奖兑好礼，极乐派对嗨不停！"],["哇！这么棒！"],[function():void
         {
            NpcDialog.show(NPC.MUMU,["本次活动的主题是疯狂变变变，本祭祀独家发明0xff0000神奇变身球0xffffff，可以让你变成所有的精灵！"],["哇！所有精灵！？"],[function():void
            {
               MainManager.selfVisible = false;
               AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
               {
                  MainManager.selfVisible = true;
                  NpcDialog.show(NPC.MUMU,["我还可以变0xff0000卡修斯、布莱克；始祖灵兽、托鲁克；小布、帕罗狄亚、尤米娜0xffffff……"],["哇！我也要变！我也要变！"],[function():void
                  {
                     NpcDialog.show(NPC.MUMU,["哈哈哈，这么珍贵的变身球可不能随便就给你，你得拿0xff0000六一欢乐券0xffffff来换哦！"],["怎样才能得到六一欢乐券呀！"],[function():void
                     {
                        EventManager.addEventListener("closeChildrenDayMain",onPanelClose);
                        ModuleManager.showModule(ClientConfig.getFestivalModule("ChildrenDayMainPanel"),"正在打开欢乐券面板……");
                     }]);
                  }]);
               });
            }]);
         }]);
      }
      
      private static function onPanelClose(param1:Event) : void
      {
         var e:Event = param1;
         EventManager.removeEventListener("closeChildrenDayMain",onPanelClose);
         NpcDialog.show(NPC.MUMU,["小赛尔！这个六一让我们一起快乐的大狂欢吧！ 0xff0000 6月2日本周六14:30-15:00 0xffffff我还为大家准备了超级好礼！记得来领取哦！"],["好呀~好呀~"],[function():void
         {
            AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
            {
               TasksManager.complete(TASK_ID,0,function(param1:Boolean = true):void
               {
                  if(param1)
                  {
                     destroy();
                     MapManager.refMap();
                  }
               });
            });
         }]);
      }
      
      private static function get taskMC() : MovieClip
      {
         if(MapManager.currentMap.id == 10)
         {
            return _map.conLevel["task1090mc"];
         }
         return null;
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         EventManager.removeEventListener("closeChildrenDayMain",onPanelClose);
         OgreController.isShow = true;
         MainManager.selfVisible = true;
         ToolBarController.showOrHideAllUser(true);
         if(taskMC)
         {
            DisplayUtil.removeForParent(taskMC);
            taskMC.removeEventListener(MouseEvent.CLICK,onAcceptHandler);
         }
         _map = null;
      }
   }
}
