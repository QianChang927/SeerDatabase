package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class FlyingSickleEvoController
   {
      
      public static var curTaskPro:uint;
      
      public static const GETPET_PRE:uint = 0;
      
      public static const PETSUPEREVO_PRE:uint = 1;
      
      public static const GENERALTASK_1:uint = 2;
      
      public static const GENERALTASK_2:uint = 3;
      
      public static const GENERALTASK_3:uint = 4;
      
      public static const GENERALTASK_4:uint = 5;
      
      public static const GENERALTASK_5:uint = 6;
      
      public static const TIMELIMITETASK_1:uint = 7;
      
      public static const FIGHTTASK_1:uint = 8;
      
      public static const FIGHTTASK_2:uint = 9;
      
      public static const FIGHTTASK_3:uint = 10;
       
      
      public function FlyingSickleEvoController()
      {
         super();
      }
      
      public static function playStory(param1:uint, param2:Function = null, param3:Function = null) : void
      {
         var index:uint = param1;
         var fun:Function = param2;
         var fun2:Function = param3;
         var storyArr:Array = playTask(index);
         if(index < 2)
         {
            TaskDiaLogManager.single.playStory(storyArr,function():void
            {
               if(fun != null)
               {
                  fun();
               }
            });
         }
         else
         {
            NpcDialog.show(storyArr[0],storyArr[1],storyArr[2],[fun,fun2]);
         }
      }
      
      private static function playTask(param1:uint) : Array
      {
         var _loc2_:Array = [];
         switch(param1)
         {
            case GETPET_PRE:
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.TIAN_XIE_LONG_WANG,["飞镰，向你介绍一下，这些都是我大暗黑天的长老们。平时，各大长老分工合作，负责组织的各项事务。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.TIAN_XIE_LONG_WANG,["我已向你许诺，你将担任“沦”长老之职位。但是，每一位长老的任职，必须得到其他长老们的认可才行。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.TIAN_XIE_LONG_WANG,["我找你来，除了让你们相互之间认识一下外，也是给你一个机会，在几位长老面前露上一手。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.TIAN_XIE_LONG_WANG,["你们之间过过招，也让我们看看，风之一族天之骄子的实力！"],["我必不会让你们失望！"]));
               break;
            case PETSUPEREVO_PRE:
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.TIAN_XIE_LONG_WANG,["很好，飞镰。你的表现令我满意，也得到了几位长老的认可。从今日起，你就是我们公认的长老“沦”了。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.QIANLIANG,["谢谢。我会加倍努力的。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.TIAN_XIE_LONG_WANG,["我也曾与你约定，为你增强实力！但是，组织有所规定，必须所有贡献，才能获得等值的奖励"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.TIAN_XIE_LONG_WANG,["这里有一些组织内的任务，完成他们就能获得贡献度，当你贡献度足够，我便可以赐予你力量，帮助你完成超进化！"],["好，我会努力完成的！"]));
               break;
            case GENERALTASK_1:
               _loc2_.push(NPC.FAN_LI);
               _loc2_.push(["你是谁！呀！不要过来！再靠近我我要报警了！"]);
               _loc2_.push(["嘻嘻，哪里跑！","看我用钻石砸晕你！","认错人了，不好意思"]);
               break;
            case GENERALTASK_2:
               _loc2_.push(NPC.BLACK_HUOYANBEI);
               _loc2_.push(["你好，你就是来训练我们的教官吗？"]);
               _loc2_.push(["没错，开始训练吧！","看我用钻石砸晕你！","认错人了，不好意思"]);
               break;
            case GENERALTASK_3:
               _loc2_.push(NPC.LING_ZUN);
               _loc2_.push(["黑岩珠是我最珍重的宝贝之一，你休想从我这里拿走分毫！"]);
               _loc2_.push(["那就对不起了！","看我用钻石砸晕你！","认错人了，不好意思"]);
               break;
            case GENERALTASK_4:
               _loc2_.push(NPC.SEER);
               _loc2_.push(["你是飞镰！哼，正好一网打尽！"]);
               _loc2_.push(["那只能让你失望了。","看我用钻石砸晕你！","认错人了，不好意思"]);
               break;
            case GENERALTASK_5:
               _loc2_.push(NPC.UNDEAD_BIRD);
               _loc2_.push(["可恶的小贼！你想对我的宝宝做什么！不，我的尾羽你也不能拿走！"]);
               _loc2_.push(["看来只能先击败你了","看我用钻石砸晕你！","认错人了，不好意思"]);
               break;
            case TIMELIMITETASK_1:
               _loc2_.push(NPC.MO_LING_XIAN_NV);
               _loc2_.push(["你已经是第十一批来到这里妄图采摘玉凝草的人了。前十批全部无功而返，这一次，你也不会例外！"]);
               _loc2_.push(["让你看看我的厉害！","看我用钻石砸晕你！","认错人了，不好意思"]);
               break;
            case FIGHTTASK_1:
               _loc2_.push(NPC.MOGER);
               _loc2_.push(["你这只小虫子，也想来阻挡莫戈尔的脚步？"]);
               _loc2_.push(["接招吧！","看我用钻石砸晕你！","认错人了，不好意思"]);
               break;
            case FIGHTTASK_2:
               _loc2_.push(NPC.FOREVERQUAN);
               _loc2_.push(["哼，大暗黑天？你们真是好大的胆子，居然敢主动偷袭我！"]);
               _loc2_.push(["快，大伙一起上！","看我用钻石砸晕你！","认错人了，不好意思"]);
               break;
            case FIGHTTASK_3:
               _loc2_.push(NPC.CAOCAO);
               _loc2_.push(["我看上的人，你也敢下手？你若敢再上前一步，定叫你躺着回去！"]);
               _loc2_.push(["你挡着也没用！","看我用钻石砸晕你！","认错人了，不好意思"]);
         }
         return _loc2_;
      }
   }
}
