package com.robot.app2.share.platform
{
   public class Tqq extends PlatForm
   {
       
      
      public function Tqq()
      {
         super();
         shareUrl = "http://share.v.t.qq.com/index.php?c=share&a=index";
      }
      
      override public function get url() : String
      {
         shareUrl += "&url=" + shareData.url;
         shareUrl += "&title=" + shareData.title;
         shareUrl += "&summary=" + shareData.summary;
         shareUrl += "&pic=";
         var _loc1_:int = 0;
         while(_loc1_ < shareData.pics.length)
         {
            shareUrl += shareData.pics[_loc1_] + "|";
            _loc1_++;
         }
         return shareUrl;
      }
   }
}
