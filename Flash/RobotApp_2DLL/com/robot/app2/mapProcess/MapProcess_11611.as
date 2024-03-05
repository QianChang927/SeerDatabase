package com.robot.app2.mapProcess
{
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app2.component.PlayAnimationComponent;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_11611 extends BaseMapProcess
   {
       
      
      private var _index:uint;
      
      public function MapProcess_11611()
      {
         super();
      }
      
      override protected function init() : void
      {
         var playAnimate:PlayAnimationComponent = null;
         super.init();
         conLevel["mc"].visible = false;
         playAnimate = new PlayAnimationComponent("NewFightSubMapMv",function():void
         {
            playAnimate.destroy();
            conLevel["mc"].visible = true;
            TaskDiaLogManager.single.playStory(dialogArr1,function():void
            {
               BitBuffSetClass.setState(23571,1);
               MapManager.changeMapWithCallback(1279,function():void
               {
                  ModuleManager.showAppModule("NewFightSubPanel");
               });
            });
         },1);
      }
      
      private function get dialogArr1() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2595,["……无妨，使者辛苦了。"],["哪里！我们可是合作关系。 "]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2769,["长话短说，我此次前来，是还有一个消息要通知诸位。"],["哦？ "]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2769,["是这样，从夺白虎之血，玄武自爆之后，其余的几个星系以及那群保卫者，已经大大提高了守护力量。"],["所以使者的意思是？ "]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2769,["我希望诸位这次可以增加兵力，彻底摧毁保卫者的防线！毕竟，神兽之血，诸位可是势在必得的吧？."],["那是自然！"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2595,["我明白使者的意思了，既然已经打草惊蛇，那么我们这次将投入最大的战力，一举击溃他们！"],["龙皇看来已经决定委派谁出战了？ "]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2595,["无错！此次，我和冥皇将亲自出手！"],[" ！"]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2595,["若我没有记错，我们的下一个目标是卡兰星系吧？"],["没错。"]);
         var _loc8_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2595,["那里可是龙族的老巢，我跟他们还有一些陈年旧账要算，就让我去会会他们吧！"],[" 有难长老亲自出马，此次必定水到渠成！"]);
         var _loc9_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2595,["使者请先行一步，我随后就前往卡兰星系，至于冥皇……"],["怎么了？ "]);
         var _loc10_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2595,["没什么，他还需要额外做些准备，稍后就来，不必在意。（龙皇瞟了一眼，冥皇心领神会）"],["好！那我和主人就祝二位武运昌隆！"]);
         _loc1_.isNewDialog_1 = _loc2_.isNewDialog_1 = _loc3_.isNewDialog_1 = true;
         _loc4_.isNewDialog_1 = _loc5_.isNewDialog_1 = _loc6_.isNewDialog_1 = true;
         _loc7_.isNewDialog_1 = _loc8_.isNewDialog_1 = _loc9_.isNewDialog_1 = _loc10_.isNewDialog_1 = true;
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_];
      }
      
      override public function destroy() : void
      {
         super.destroy();
      }
   }
}
