package com.robot.app2.control
{
   import com.codecatalyst.promise.Promise;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.component.ValueUpdateWithPromiseComponent;
   import com.robot.core.config.xml.GoldProductXMLInfo;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm2;
   
   public class LifanteValueUpCom extends ValueUpdateWithPromiseComponent
   {
       
      
      private const FORVER_DAILY_IDS:Array = [6884,6885,6886,6887,6888,6889,15433,15434,15435,15436];
      
      public function LifanteValueUpCom()
      {
         super();
         forverOrDailyValueIds = this.FORVER_DAILY_IDS;
         itemIds = [1713374];
      }
      
      public function get fightStep() : int
      {
         var _loc1_:int = int(getForverOrDailyValue(6884));
         var _loc2_:int = 0;
         var _loc3_:int = 4;
         while(_loc3_ <= 6)
         {
            _loc2_ += KTool.getBit(_loc1_,_loc3_);
            _loc3_++;
         }
         return _loc2_;
      }
      
      public function get getPet() : Boolean
      {
         return getflag(6884,1);
      }
      
      public function get getUpItems() : Boolean
      {
         return getflag(6884,2);
      }
      
      public function showPassTip(param1:int) : void
      {
         var _loc2_:int = int(GoldProductXMLInfo.getPriceByProID(250613 + param1));
         var _loc3_:* = "恭喜你通过本关，至尊获得黎凡特现在仅需" + _loc2_ + "钻!";
         Alarm2.show(_loc3_);
      }
      
      public function oneKeyPassFight(param1:int) : Promise
      {
         var index:int = param1;
         return KTool.buyProductWithPromise(250615 + index).then(function():Promise
         {
            return SocketConnection.sendWithPromise(43259,[2,1 + index]);
         });
      }
   }
}
