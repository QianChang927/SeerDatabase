package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class LeiyiPartnerController
   {
      
      private static var _taskMC:MovieClip;
       
      
      public function LeiyiPartnerController()
      {
         super();
      }
      
      public static function playPlot1() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("leiyi_partner"),function(param1:MovieClip):void
         {
            var mod0:TaskMod;
            var mod1:TaskMod;
            var mod2:TaskMod;
            var mod3:TaskMod;
            var mod4:TaskMod;
            var mod5:TaskMod;
            var mod6:TaskMod;
            var mod7:TaskMod;
            var mod8:TaskMod;
            var mod9:TaskMod;
            var mod10:TaskMod;
            var mod11:TaskMod;
            var mod12:TaskMod;
            var mod13:TaskMod;
            var mod14:TaskMod;
            var mod15:TaskMod;
            var mod16:TaskMod;
            var mod17:TaskMod;
            var list:Array;
            var taskMc:MovieClip = null;
            var mc:MovieClip = param1;
            taskMc = mc;
            LevelManager.appLevel.addChild(taskMc);
            taskMc.gotoAndStop(1);
            mod0 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc1"]);
            mod1 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEI_XIAO_YI,["博士博士！你要帮帮我啊！"]);
            mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BO_SHI_PAI_TE,["……怎么帮你，难道你也要弄一只巨龙来骑？"]);
            mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEI_XIAO_YI,["好啊！博士，你有养巨龙吗？"]);
            mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BO_SHI_PAI_TE,["你猜我有没有养……我只是随口这么一说而已。你看布莱克和索西斯是至交好友，你有至交好友的巨龙吗？"]);
            mod5 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEI_XIAO_YI,["呜呜呜……博士，我知道你神通广大，知识渊博，博古通今，前无古人，后无来者……"]);
            mod6 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BO_SHI_PAI_TE,["少拍马屁。"]);
            mod7 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BO_SHI_PAI_TE,["不过……我可以给你一个机会，要看你自己把握了。"]);
            mod8 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEI_XIAO_YI,["哇！真的吗博士！"]);
            mod9 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BO_SHI_PAI_TE,["你跟我来就知道了。"]);
            mod10 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc2"]);
            mod11 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEI_XIAO_YI,["这么多巨龙！天啊，还有龙尊！啊！那不是天邪龙王吗！天呐，我一定是眼花了……"]);
            mod12 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEI_XIAO_YI,["天呐，博士，你对我太好了，送我这么多只巨龙，呜呜呜………"]);
            mod13 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BO_SHI_PAI_TE,["打住！谁说我直接把它们送你了？巨龙是一种高贵的精灵，你怎么可能平白无故就骑在他们的头上！"]);
            mod14 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEI_XIAO_YI,["那我要做呢博士，你快告诉我！"]);
            mod15 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BO_SHI_PAI_TE,["你可以从他们之中挑选一只作为你心仪的坐骑，但是最终你需要与他们进行比试和沟通，得到他们的认可。此后，你们还需要长期的磨合，才能拥有更强的力量。"]);
            mod16 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BO_SHI_PAI_TE,["一只巨龙绝对不会让一只没有得到他们认可的精灵骑在头上。切记，要尊重他们，一旦成为战友，你们将生死不离！"]);
            mod17 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEI_XIAO_YI,["我明白了博士！谢谢你！"]);
            list = [mod0,mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11,mod12,mod13,mod14];
            TaskDiaLogManager.single.playStory(list,function():void
            {
               KTool.showMapAllPlayerAndMonster();
               DisplayUtil.removeForParent(taskMc);
               BitBuffSetClass.setState(22892,1,function():void
               {
                  ModuleManager.showAppModule("LeiyiPartnerPanel");
               });
            });
         });
      }
   }
}
