package com.robot.app2.control
{
   import com.codecatalyst.promise.Promise;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.component.ValueUpdateWithPromiseComponent;
   import com.robot.core.config.xml.GoldProductXMLInfo;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm2;
   
   public class HundunmoshiValueUpCom extends ValueUpdateWithPromiseComponent
   {
       
      
      private const FORVER_DAILY_IDS:Array = [14542,14543,14544,14545,14546,14547,14548,14549,104098,104099,104100,104101,104102,104103,104104,104105,104106,104107,104108,104109];
      
      private const PET_IDS:Array = [3388,3391];
      
      private const ITME_IDS:Array = [1713439,1713440,1713441,1713442];
      
      public function HundunmoshiValueUpCom()
      {
         super();
         forverOrDailyValueIds = this.FORVER_DAILY_IDS;
         petIds = this.PET_IDS;
         itemIds = this.ITME_IDS;
      }
      
      public function get fightStep() : int
      {
         var _loc1_:int = int(getForverOrDailyValue(104098));
         var _loc2_:int = 0;
         var _loc3_:int = 1;
         while(_loc3_ <= 3)
         {
            _loc2_ += KTool.getBit(_loc1_,_loc3_);
            _loc3_++;
         }
         return _loc2_;
      }
      
      public function get getPet() : Boolean
      {
         return getflag(104098,4);
      }
      
      public function get getUpItems() : Boolean
      {
         return getflag(4,5);
      }
      
      public function showPassTip(param1:int) : void
      {
         var _loc2_:int = this.getOneKeyBuyId(param1 + 1);
         var _loc3_:int = int(GoldProductXMLInfo.getPriceByProID(_loc2_));
         var _loc4_:* = "恭喜你通过本关，至尊获得混沌魔使现在仅需" + _loc3_ + "钻!";
         Alarm2.show(_loc4_);
      }
      
      public function oneKeyPassFight(param1:int) : Promise
      {
         var args:Array = null;
         var index:int = param1;
         var pids:Array = [250678,250682,250685];
         args = [[1,2],[2,5],[3,2]];
         return KTool.buyProductWithPromise(pids[index]).then(function():Promise
         {
            return SocketConnection.sendWithPromise(45736,args[index]);
         });
      }
      
      public function getOneKeyBuyId(param1:int = 0) : int
      {
         var _loc2_:* = [[250665,250668,250671],[250666,250669,250672],[250667,250670,250673],[250745,250746,250747]];
         return _loc2_[param1][this.shizheNum];
      }
      
      public function get shizheNum() : int
      {
         var _loc1_:int = 0;
         var _loc2_:int = 0;
         while(_loc2_ < this.PET_IDS.length)
         {
            if(havePet(this.PET_IDS[_loc2_]))
            {
               _loc1_++;
            }
            _loc2_++;
         }
         return _loc1_;
      }
   }
}
