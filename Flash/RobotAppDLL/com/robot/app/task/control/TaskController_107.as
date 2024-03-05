package com.robot.app.task.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_107
   {
      
      private static var panel:AppModel = null;
      
      public static var fishNumOne:uint = 0;
      
      public static var fishNumTwo:uint = 0;
      
      public static var fishNumThree:uint = 0;
      
      public static var fishNumFour:uint = 0;
      
      public static var fishNumFive:uint = 0;
      
      public static var testBool:Boolean = true;
      
      private static var fishBool:Boolean = false;
       
      
      public function TaskController_107()
      {
         super();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.DOCTOR,["哎！我正为帮0xff0000利牙鱼0xffffff接种精灵疫苗犯愁呢！这群小家伙们可倔强啦！要知道不接受疫苗对他们的健康可是有威胁的！这可怎么办是好#2……"],["为精灵们接种疫苗？听起来很有趣啊！","我一会再来找你！"],[function():void
         {
            TasksManager.accept(107,function(param1:Boolean):void
            {
               var b:Boolean = param1;
               if(b)
               {
                  NpcDialog.show(NPC.DOCTOR,["哦对了！你知道0xff0000利牙鱼0xffffff们居住在哪里吗？它们可是生活在海洋星的深水区！它们可顽皮啦，如果你不能战胜他们！它们可是不会服从的！"],["我这就去海洋星深水区为它们接种疫苗！"],[function():void
                  {
                     MapManager.changeMap(21);
                  }]);
               }
            });
         }]);
      }
      
      public static function startPro() : void
      {
         TasksManager.getProStatusList(107,function(param1:Array):void
         {
            if(Boolean(param1[4]) && !param1[5])
            {
               TaskController_107.completeTask();
            }
         });
      }
      
      public static function showPanel() : void
      {
         var _loc1_:String = "TaskPanel_107";
         if(panel)
         {
            panel.destroy();
            panel = null;
         }
         panel = new AppModel(ClientConfig.getTaskModule(_loc1_),"正在打开任务信息");
         panel.setup();
         panel.show();
      }
      
      public static function npcProSay() : void
      {
         NpcDialog.show(NPC.DOCTOR,["哦对了！你知道0xff0000利牙鱼0xffffff们居住在哪里吗？它们可是生活在海洋星的深水区！它们可顽皮啦，如果你不能战胜他们！它们可是不会服从的！"],["我这就去海洋星深水区为它们接种疫苗！"],[function():void
         {
            MapManager.changeMap(21);
         }]);
      }
      
      public static function completeTask() : void
      {
         NpcDialog.show(NPC.DOCTOR,["啊？你这么快就都已经好了？果然是青出于蓝胜于蓝啊！我真的老咯！这些是给你的奖励！希望小家伙们都可以健康成长！"],["我也是这么想的！"],[function():void
         {
            TasksManager.complete(107,5,null,true);
         }]);
      }
      
      public static function oneStep() : void
      {
         if(fishBool == false)
         {
            NpcDialog.show(NPC.VERYBIGFISH,["呼~~想要给我们接种疫苗？就凭你？哼！打赢我们再说吧！你赢了我们就乖乖听你的话！怎么样？"],["我可要来咯！"],[function():void
            {
               fishBool = true;
               TaskController_107.showPanel();
            }]);
         }
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
