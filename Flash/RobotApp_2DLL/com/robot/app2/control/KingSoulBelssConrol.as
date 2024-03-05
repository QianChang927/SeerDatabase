package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.component.ValuesUpdateComponent;
   
   public class KingSoulBelssConrol
   {
      
      private static var _valueUpcom:ValuesUpdateComponent;
       
      
      public function KingSoulBelssConrol()
      {
         super();
      }
      
      public static function update(param1:Function) : void
      {
         valueUpcom.updateValues(param1);
      }
      
      public static function get kingJars() : int
      {
         var _loc3_:uint = 0;
         var _loc1_:int = 0;
         var _loc2_:int = 0;
         while(_loc2_ < 10)
         {
            _loc3_ = uint(KTool.getByte(_valueUpcom.getForverOrDailyValue(104017 + _loc2_),0));
            if(_loc3_ > 0)
            {
               _loc1_ += 1;
            }
            _loc2_++;
         }
         return _loc1_;
      }
      
      public static function get totalJars() : int
      {
         var _loc3_:uint = 0;
         var _loc1_:int = 0;
         var _loc2_:int = 0;
         while(_loc2_ < 10)
         {
            _loc3_ = uint(KTool.getByte(_valueUpcom.getForverOrDailyValue(104017 + _loc2_),0));
            _loc1_ += _loc3_;
            _loc2_++;
         }
         return _loc1_;
      }
      
      public static function getIsGetFirst(param1:int) : Boolean
      {
         var _loc2_:Boolean = false;
         var _loc3_:int = int(KTool.getByte(_valueUpcom.getForverOrDailyValue(param1),0));
         return _loc3_ > 0 ? true : false;
      }
      
      public static function buyJarsStatus(param1:int) : int
      {
         return int(KTool.getByte(_valueUpcom.getForverOrDailyValue(param1),2));
      }
      
      public static function OtherJarsStatus(param1:int) : int
      {
         return int(KTool.getByte(_valueUpcom.getForverOrDailyValue(param1),0));
      }
      
      private static function get valueUpcom() : ValuesUpdateComponent
      {
         if(_valueUpcom == null)
         {
            _valueUpcom = new ValuesUpdateComponent();
            _valueUpcom.forverOrDailyValueIds = [14507,14508,14509,14510,14511,14512,14513,14514,104016,104017,104018,104019,104020,104021,104022,104023,104024,104025,104026];
         }
         return _valueUpcom;
      }
   }
}
