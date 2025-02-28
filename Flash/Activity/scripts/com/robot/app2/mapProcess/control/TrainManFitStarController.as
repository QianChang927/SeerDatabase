package com.robot.app2.mapProcess.control
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.manager.MainManager;
   import com.robot.core.npc.NPC;
   
   public class TrainManFitStarController
   {
       
      
      public function TrainManFitStarController()
      {
         super();
      }
      
      public static function playStory(param1:int) : Promise
      {
         var _deferred:Deferred = null;
         var index:int = param1;
         _deferred = new Deferred();
         TaskDiaLogManager.single.playStory(getStroy(index),function():void
         {
            _deferred.resolve(true);
         });
         return _deferred.promise;
      }
      
      private static function getStroy(param1:uint) : Array
      {
         var _loc2_:Array = [];
         switch(param1)
         {
            case 1:
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.HOPE_NUMBER,["星皇大人，希望号向您报道！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.HANYUXINGHUANG,["这次就要辛苦你一趟了，希望号。新的一年即将到来，我为赛尔号的小伙伴们准备了很多丰富的好礼，需要运送过去。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.HANYUXINGHUANG,["现在赛尔号飞船已经航行至宇宙深处，距离这里十分遥远。得麻烦你帮忙把这些礼物送到飞船那里。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.HOPE_NUMBER,["这是我应该做的！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.HANYUXINGHUANG,["这些礼物十分贵重，而且不得有失。此行可能危险重重，你要多加保重。"],["谢谢大人关心，我这就出发！"]));
               break;
            case 2:
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.HAI_DAO,["老大说的没错，果然有只肥羊进网了！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.HAI_DAO,["嘿嘿，看它那个口袋鼓鼓囊囊的样子，里面肯定装着不少好东西，这下我们发达了！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.HAI_DAO,["喂！那边的铁疙瘩，看到本大爷们，还不快快把手里的宝贝交出来！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.HAI_DAO,["说不定大爷我心情好，就饶你一条命呢，哈哈哈！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.HOPE_NUMBER,["哼，想从我手里抢走孩子们的礼物，你们这是异想天开！我倒要看看，你们是哪来的胆子！"]));
               break;
            case 3:
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHEN_SHENLIHAO,["哦？老朋友，你怎么到这里来了。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.HOPE_NUMBER,["我遇到了一点麻烦，需要借助一下你的武器系统。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHEN_SHENLIHAO,["这个简单。你只需要获得我的神力之核，就能拥有我的强大武力！"]));
               break;
            case 4:
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.TIANCANXUANHUN_QINGLONG,["弑魂青龙，你将我引诱到这里，就是为了跟我一较高下吗？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIHUN_QINGLONG,["没错，青龙。我真的很想知道，身为神兽，是否真的那么强大？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.TIANCANXUANHUN_QINGLONG,["哼，本来我是没功夫跟人决斗的，但是既然你自投罗网，为了伸张正义，我也正好可以将你一并干掉。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIHUN_QINGLONG,["哦？那很好，如果你能全力出手的话，正合我意！"]));
               break;
            case 5:
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.COURAGEHAO,["哦？老朋友，你怎么到这里来了。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.HOPE_NUMBER,["我遇到了一点麻烦，需要借助一下你的装甲系统。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.COURAGEHAO,["这个简单。你只需要获得我的勇气之核，就能拥有我的强大防御！"]));
               break;
            case 6:
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.HOPE_NUMBER,["怎么办，礼物全都飞出去了。让我清点一下……哎呀，我们少了200份礼物！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.HOPE_NUMBER,["不行，这可是孩子们新年的希望，我一定要弥补自己犯下的过错！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我来帮你！"]));
               break;
            case 7:
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SKYFIREHAO,["哦？老朋友，你怎么到这里来了。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.HOPE_NUMBER,["我遇到了一点麻烦，需要借助一下你的动力系统。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SKYFIREHAO,["这个简单。你只需要获得我的烈焰之核，就能拥有我的强大动力！"]));
               break;
            case 8:
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["真是辛苦你了，希望号。千辛万苦来到这里，你接下来的路程，就让我来代你完成吧！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.HOPE_NUMBER,["索伦森！原来这一切背后的主导者，是你！"]));
               break;
            case 9:
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["辛苦你了，希望号！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.HOPE_NUMBER,["幸不辱命，罗杰船长。能够准时为小赛尔们带来新年的祝福，这也是我的心愿之一。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["你旅途劳顿，赶快休息一下吧。在即将到来的元旦佳节，我们为广大小赛尔们准备了大量的节日活动和缤纷好礼，届时你也别忘了前来参与哦！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.HOPE_NUMBER,["我一定会来的！除此以外，我还有个请求。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["哦？你说。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.HOPE_NUMBER,["我想与这位与我同甘共苦的小朋友成为伙伴。不知道可不可以呢？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["哈哈哈，这可是一件好事呀！0xff0000" + MainManager.actorInfo.nick + "0xffffff，你怎么看？"],["非常乐意！"]));
               break;
            case 10:
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHEN_SHENLIHAO,["武器想要变得更加强大，需要经历两个过程。一是融合百家所长，二是在实战中磨砺光辉。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHEN_SHENLIHAO,["只要你能0xff0000在15分钟内击败所有对手0xffffff，就能获得神力之核！"],["我明白了。"]));
               break;
            case 11:
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.DUOTIAN_BAIDU,["星系守护者果然名不虚传！弑魂•青龙，我说你不行，你就是不行。怎么样，心服口服了吧！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIHUN_QINGLONG,["哼！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.TIANCANXUANHUN_QINGLONG,["什么，你居然还带了帮手……卑鄙！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.DUOTIAN_BAIDU,["嘿嘿，你想顺手替天行道，可惜啊，我们也是这个想法。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.TIANCANXUANHUN_QINGLONG,["糟了，今天怕是难以全身而退……"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.HOPE_NUMBER,["青龙大人，不要担心，我来帮你！"]));
               break;
            case 12:
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.JIEXUANWU,["是不是以为自己就要跑掉了，嗯？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.TIANCANXUANHUN_QINGLONG,["可恶啊，居然还有一个……"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.JIEXUANWU,["虽然暗黑朱雀那家伙今天来不了，不过我们三个在此，你休想离开这里！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.HOPE_NUMBER,["我……我跟你们拼了！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["是时候贡献自己的一份力了！"]));
               break;
            case 13:
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.COURAGEHAO,["防御想要变得更加强大，需要经历两个过程。一是被千百种方式所蹂躏，二是根据受过的创伤寻找提升之法。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.COURAGEHAO,["只要你能0xff0000按照规定的方式完成所有挑战0xffffff，就能获得勇气之核！"],["我明白了。"]));
               break;
            case 14:
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SKYFIREHAO,["我可以为你提升你的动力核心，但是你要帮我一个忙。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SKYFIREHAO,["每天的11:00-12:00和17:00-18:00，这里会出现一只非常强大的精灵。它对我的修炼非常有帮助。你需要的就是击败它！"],["我明白了。"]));
         }
         return _loc2_;
      }
   }
}
