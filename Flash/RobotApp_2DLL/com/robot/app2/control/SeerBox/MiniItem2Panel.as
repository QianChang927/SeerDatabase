package com.robot.app2.control.SeerBox
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.component.TimeCountdownComponent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   
   public class MiniItem2Panel implements IItemPanel
   {
       
      
      private var tcdC:TimeCountdownComponent;
      
      public function MiniItem2Panel()
      {
         super();
      }
      
      public function destory() : void
      {
         if(this.tcdC != null)
         {
            this.tcdC.destroy();
         }
      }
      
      public function init(param1:MovieClip) : void
      {
         var ui:MovieClip = param1;
         KTool.getMultiValue([15296,12462,15296],function(param1:Array):void
         {
            var _loc2_:Array = [5,10,20,30,45,60];
            var _loc3_:int = 1;
            while(_loc3_ <= 6)
            {
               if(KTool.getBit(param1[0],_loc3_) != 1)
               {
                  break;
               }
               _loc3_++;
            }
            if(_loc3_ > 6)
            {
               _loc3_ == 6;
            }
            var _loc4_:int;
            if((_loc4_ = SystemTimerManager.time - MainManager.actorInfo.loginTime + param1[1]) > _loc2_[_loc3_ - 1] * 60)
            {
               ui["txt"].text = "00:00";
            }
            else
            {
               if(tcdC != null)
               {
                  tcdC.destroy();
               }
               tcdC = new TimeCountdownComponent(ui["txt"],2,false);
               tcdC.initialSeconds = _loc2_[_loc3_ - 1] * 60 - _loc4_;
               tcdC.start();
            }
            var _loc5_:* = KTool.getBit(param1[2],6) == 1;
            ui["flag"].visible = _loc5_;
            CommonUI.setEnabled(ui["btn"],!_loc5_,false);
         });
      }
   }
}
