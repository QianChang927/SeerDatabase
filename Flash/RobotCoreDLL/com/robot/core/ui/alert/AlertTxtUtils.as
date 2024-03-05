package com.robot.core.ui.alert
{
   import com.robot.core.utils.TextFormatUtil;
   
   public class AlertTxtUtils
   {
       
      
      public function AlertTxtUtils()
      {
         super();
      }
      
      public static function getEXP(param1:uint = 2000) : String
      {
         return TextFormatUtil.getRedTxt(param1 + "积累经验") + "已经存入你的经验分配器中。";
      }
      
      public static function getBean(param1:uint = 2000) : String
      {
         return TextFormatUtil.getRedTxt(param1 + "赛尔豆") + "已放入了你的储存箱。";
      }
      
      public static function getGoods(param1:String = "", param2:int = -1) : String
      {
         if(param2 == -1)
         {
            return TextFormatUtil.getRedTxt(param1) + "已经放入你的储存箱";
         }
         return param2 + "个" + TextFormatUtil.getRedTxt(param1) + "已经放入你的储存箱";
      }
   }
}
