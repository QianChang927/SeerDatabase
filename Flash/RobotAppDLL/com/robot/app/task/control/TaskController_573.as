package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_573
   {
      
      public static const TASK_ID:uint = 573;
      
      private static var panel:AppModel;
       
      
      public function TaskController_573()
      {
         super();
      }
      
      public static function setup() : void
      {
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.IRIS,["我终于知道小魔王为什么会无限重生了……太可怕了！"],["爱丽丝！爱丽丝！到底怎么了？","我一会再来找你哟！"],[function():void
         {
            TasksManager.accept(TASK_ID,function(param1:Boolean):void
            {
               if(param1)
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task573_cctv"),movEndFun);
               }
            });
         }]);
      }
      
      public static function startPro() : void
      {
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
            {
               NpcDialog.show(NPC.IRIS,["雷伊一定是去参加卡酷春晚帮我们拿神兵利器了！它是我们最后的希望了……没想到这次就连海盗都来帮忙了！"],null,null,false,dialogPro1);
            }
         });
      }
      
      private static function dialogPro1() : void
      {
         NpcDialog.show(NPC.IRIS,["哦，对了！这次务必记得关注0xff00002月2日19:40分北京卫视和北京卡酷动漫卫视0xffffff的卡酷春晚，得不到0xff0000通关密码0xffffff，雷伊就白去了……"],["我一定不会忘记的！"],[dialogPro2]);
      }
      
      private static function dialogPro2() : void
      {
         TasksManager.complete(TASK_ID,2);
      }
      
      private static function movEndFun() : void
      {
         NpcDialog.show(NPC.IRIS,["小魔王的无限次重生，这股强大而可怕的力量可能是来自于咤克斯！所以我们必须要找到它并消灭……"],null,null,false,dialog1);
      }
      
      private static function dialog1() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task573_2"),movEndFun2);
      }
      
      private static function movEndFun2() : void
      {
         NpcDialog.show(NPC.IRIS,["根据博士的分析，咤克斯很有可能就暂居在墨杜萨星上！这也可能是我们最后的机会了……"],["我一定会找到它的老巢！出发吧……"],[dialog2]);
      }
      
      private static function dialog2() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task573_1"),movEnd);
      }
      
      private static function movEnd() : void
      {
         MapManager.changeMap(437);
      }
      
      public static function showPanel() : void
      {
         var _loc1_:String = "TaskPanel_" + TASK_ID;
         if(panel == null)
         {
            panel = new AppModel(ClientConfig.getTaskModule(_loc1_),"正在打开任务信息");
            panel.setup();
         }
         panel.show();
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
