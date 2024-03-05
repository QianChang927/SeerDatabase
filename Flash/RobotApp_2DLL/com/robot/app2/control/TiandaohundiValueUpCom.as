package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.component.ValueUpdateWithPromiseComponent;
   
   public class TiandaohundiValueUpCom extends ValueUpdateWithPromiseComponent
   {
       
      
      public function TiandaohundiValueUpCom()
      {
         super();
         forverOrDailyValueIds = [14534,14535,14536,14537,104076,104077,104078,104079,104080,104081,104082,104083,104084,104085,104086,104087,104088,104089];
      }
      
      public function get currentStep() : int
      {
         var _loc1_:int = 0;
         var _loc2_:int = int(getForverOrDailyValue(104089));
         var _loc3_:int = 0;
         while(_loc3_ < 3)
         {
            if(KTool.getBit(_loc2_,1 + _loc3_) != 0)
            {
               _loc1_++;
            }
            _loc3_++;
         }
         return _loc1_;
      }
      
      public function get isFinsihAll() : Boolean
      {
         return this.currentStep == 3;
      }
      
      public function getIsFinishStep(param1:int) : Boolean
      {
         var _loc2_:int = int(getForverOrDailyValue(104089));
         return KTool.getBit(_loc2_,1 + param1) != 0;
      }
      
      public function getFightNum(param1:int) : int
      {
         return getForverOrDailyValue(14534 + param1);
      }
   }
}
