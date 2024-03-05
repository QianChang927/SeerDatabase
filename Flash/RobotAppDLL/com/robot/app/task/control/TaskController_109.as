package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.media.Sound;
   import org.taomee.debug.DebugTrace;
   
   public class TaskController_109
   {
      
      private static var panel:AppModel = null;
      
      public static var taskBool:Boolean = false;
       
      
      public function TaskController_109()
      {
         super();
      }
      
      public static function start() : void
      {
      }
      
      public static function startPro() : void
      {
         TasksManager.getProStatusList(109,function(param1:Array):void
         {
            if(Boolean(param1[2]) && !param1[3])
            {
               doctoerCheck();
            }
         });
      }
      
      public static function showPanel() : void
      {
         if(panel == null)
         {
            panel = new AppModel(ClientConfig.getTaskModule("TaskPanel_109"),"正在打开任务信息");
            panel.setup();
         }
         panel.show();
      }
      
      public static function applyTask(param1:MovieClip, param2:Sound) : void
      {
         var air:MovieClip = null;
         var mc:MovieClip = param1;
         var taskSoun:Sound = param2;
         air = mc;
         if(TasksManager.getTaskStatus(109) == TasksManager.UN_ACCEPT)
         {
            NpcDialog.show(NPC.SMALLJIER,["呼~~~呼~~~#3热死咯！热死咯！不知道为什么火山星突然变得好热！热量好像是从0xff0000火山星山洞0xffffff传出来的……"],["我这就去看个究竟！","我一会再来看看吧……"],[function():void
            {
               TasksManager.accept(109,function():void
               {
                  taskSoun.play();
                  air.visible = true;
                  AnimateManager.playMcAnimate(air,0,"",function():void
                  {
                     air.visible = false;
                     NpcDialog.show(NPC.SEER,["星球怎么会一下子变得这么热呢？#7只要找到热量传出来的地方，我就一定能够找到线索！！我这就去0xff0000火山星山洞0xffffff看看！！"],["向火山星山洞前进吧！"],[function():void
                     {
                        taskSoun = null;
                        DebugTrace.show("开始下一步");
                     }]);
                  });
               });
            }]);
         }
      }
      
      public static function checkTaskFun(param1:MovieClip, param2:Sound) : void
      {
         var airMc:MovieClip = null;
         var mc:MovieClip = param1;
         var taskSound:Sound = param2;
         airMc = mc;
         if(TasksManager.getTaskStatus(109) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(109,function(param1:Array):void
            {
               var arr:Array = param1;
               if(!arr[0])
               {
                  NpcDialog.show(NPC.JIER,["再这么热下去！我感觉我的皮都要烤焦了！你闻闻！我都闻到我的肉香了……你说0xff0000火山星山洞深处0xffffff里到底发生了什么？为什么会这么热？"],["热量难道是从火山星山洞深处传来的？"],[function():void
                  {
                     DebugTrace.show("开始下一步");
                     TasksManager.complete(109,0,function():void
                     {
                        taskSound.play();
                        airMc.visible = true;
                        airMc.mouseChildren = false;
                        airMc.mouseEnabled = false;
                     },false);
                  }]);
               }
               if(Boolean(arr[0]) && !arr[1])
               {
                  airMc.visible = true;
                  taskSound.play();
                  airMc.mouseChildren = false;
                  airMc.mouseEnabled = false;
               }
               if(Boolean(arr[1]) && !arr[2])
               {
                  airMc.visible = true;
                  taskSound.play();
                  airMc.mouseChildren = false;
                  airMc.mouseEnabled = false;
               }
            });
         }
      }
      
      public static function doctoerCheck() : void
      {
         NpcDialog.show(NPC.DOCTOR,["什么？你是说你在火山星山洞深处发现了新精灵？它的跳舞和温度有关？哈哈哈哈 ！！！难道就是它？……哈哈！！！！"],["博士每次发现新精灵都这样……"],[function():void
         {
            NpcDialog.show(NPC.DOCTOR,[MainManager.actorInfo.formatNick + "，我真是太喜欢你啦！你每次都能给我带来很多惊喜！好啦！我要去研究新精灵咯！吼吼……这是你的奖励，拿去吧！"],["博士……"],[function():void
            {
               TasksManager.complete(109,3,null,true);
            }]);
         }]);
      }
      
      public static function setup() : void
      {
      }
      
      public static function showIcon() : void
      {
      }
      
      public static function delIcon() : void
      {
      }
      
      public static function destroy() : void
      {
         if(panel)
         {
            panel.destroy();
            panel = null;
         }
      }
   }
}
