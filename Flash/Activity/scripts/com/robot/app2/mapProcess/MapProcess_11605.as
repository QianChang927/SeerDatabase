package com.robot.app2.mapProcess
{
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app2.component.PlayAnimationComponent;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_11605 extends BaseMapProcess
   {
       
      
      private var _index:uint;
      
      public function MapProcess_11605()
      {
         super();
      }
      
      override protected function init() : void
      {
         var playAnimate:PlayAnimationComponent = null;
         super.init();
         if(BitBuffSetClass.getState(23567) == 0)
         {
            playAnimate = new PlayAnimationComponent("KaxiusiDecisionMainMapMv",function():void
            {
               playAnimate.destroy();
               TaskDiaLogManager.single.playStory(dialogArr1,function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("KaxiusiDecisionMainFullMv"),function():void
                  {
                     TaskDiaLogManager.single.playStory(dialogArr2,function():void
                     {
                        var playAnimate:* = undefined;
                        playAnimate = new PlayAnimationComponent("KaxiusiDecisionMainMapMv",function():void
                        {
                           playAnimate.destroy();
                           conLevel["mc"].gotoAndStop(2);
                           TaskDiaLogManager.single.playStory(dialogArr3,function():void
                           {
                              StatManager.sendStat2014("0126卡修斯的决心","前置剧情结束","2018运营活动");
                              BitBuffSetClass.setState(23567,1);
                              ModuleManager.showAppModule("KaxiusiDecisionMainPanel");
                           });
                        },2);
                     });
                  });
               });
            },1);
         }
      }
      
      private function get dialogArr1() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2788,["唉，还是来迟一步。."],[" "]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2603,["你所说的，我依然不信！当年我跟雷伊、盖亚一起，亲手将那个恶魔击败，他绝对不可能再次出现！"],[" "]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2788,["你再仔细回忆一下，真的不会了吗？"],[" "]);
         _loc1_.isNewDialog_1 = true;
         _loc2_.isNewDialog_1 = true;
         _loc3_.isNewDialog_1 = true;
         return [_loc1_,_loc2_,_loc3_];
      }
      
      private function get dialogArr2() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2603,["这么多年过去……他不可能再回来！."],[" "]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2788,["那你仔细看看，那是什么？"],[" "]);
         _loc1_.isNewDialog_1 = _loc2_.isNewDialog_1 = true;
         return [_loc1_,_loc2_];
      }
      
      private function get dialogArr3() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2603,["这是狄修的气息！真的，他……他回来了！."],[" "]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2603,["可恶！连狄修也被复活，咤克斯的邪恶目标，一定已经到了最关键的时刻，我们需要阻止他们！"],[" "]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2788,["不仅仅是咤克斯，我的孩子。我们恐怕要面对有史以来最强大的黑暗入侵了。"],[" "]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2788,["白虎已经战败，曾经的守护者们，这次需要我们来守护了！."],[" "]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2603,["可恶，我曾经守护过的一切，这次也绝不会让它们夺走！"],[" "]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2603,["精灵王的力量还不够，我还需要更加强大的力量！谱尼，我能不能像盖亚、缪斯一样，获得圣灵的赐福？"],[" "]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2788,["没有事情是绝对的，卡修斯。不过，你到炫彩山来，我可以帮助你想想办法。"],["我一定！一定要阻止他们！"]);
         _loc1_.isNewDialog_1 = _loc2_.isNewDialog_1 = _loc3_.isNewDialog_1 = true;
         _loc4_.isNewDialog_1 = _loc5_.isNewDialog_1 = _loc6_.isNewDialog_1 = true;
         _loc7_.isNewDialog_1 = true;
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_];
      }
      
      override public function destroy() : void
      {
         super.destroy();
      }
   }
}
