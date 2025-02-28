package com.robot.app.mapProcess
{
   import com.robot.app.task.taskscollection.Task849;
   import com.robot.app.task.taskscollection.Task851;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.utils.CronTimeVo;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_699 extends BaseMapProcess
   {
       
      
      public function MapProcess_699()
      {
         super();
      }
      
      override protected function init() : void
      {
         var _loc1_:CronTimeVo = new CronTimeVo("*","*","7-13","8","*","2015");
         if(_loc1_.isActive(SystemTimerManager.sysBJDate))
         {
            this.setVisible();
            Task851.initFor699(this);
         }
         Task849.initForMap699(this);
      }
      
      private function setVisible() : void
      {
         var _loc1_:int = 0;
         _loc1_ = 0;
         while(_loc1_ < 7)
         {
            btnLevel["circle" + _loc1_].visible = false;
            ToolTipManager.add(conLevel["circle" + _loc1_],Task851._property[_loc1_] + "元素之阵");
            ToolTipManager.add(btnLevel["circle" + _loc1_],Task851._property[_loc1_] + "元素之阵");
            ToolTipManager.add(conLevel["pillar" + _loc1_],Task851._property[_loc1_] + "元素之阵");
            _loc1_++;
         }
         DisplayUtil.removeForParent(topLevel["bulaike"]);
         DisplayUtil.removeForParent(topLevel["kaxiusi"]);
         DisplayUtil.removeForParent(topLevel["leiyi"]);
         DisplayUtil.removeForParent(topLevel["gaiya"]);
         ToolTipManager.add(topLevel["board"],"诺可撒斯的元素之阵");
         topLevel["board"].addEventListener(MouseEvent.CLICK,this.onClickBoard);
      }
      
      private function onClickBoard(param1:Event) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ElementCircle"));
      }
      
      private function onClickBoss(param1:Event) : void
      {
         if(param1.currentTarget.name.slice(0,1) == "b")
         {
            Task851.fightWithBulaike();
         }
         else if(param1.currentTarget.name.slice(0,1) == "k")
         {
            Task851.fightWithKaxiusi();
         }
         else if(param1.currentTarget.name.slice(0,1) == "l")
         {
            Task851.fightWithLeiyi();
         }
         else if(param1.currentTarget.name.slice(0,1) == "g")
         {
            Task851.fightWithGaiya();
         }
      }
      
      override public function destroy() : void
      {
         var _loc1_:int = 0;
         _loc1_ = 0;
         while(_loc1_ < 7)
         {
            ToolTipManager.remove(conLevel["circle" + _loc1_]);
            ToolTipManager.remove(btnLevel["circle" + _loc1_]);
            ToolTipManager.remove(conLevel["pillar" + _loc1_]);
            _loc1_++;
         }
         ToolTipManager.remove(topLevel["board"]);
         Task851.destroy();
         Task849.destroy();
         super.destroy();
      }
   }
}
