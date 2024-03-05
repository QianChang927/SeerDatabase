package com.robot.app2.share.platform
{
   public class Sina extends PlatForm
   {
       
      
      private var searchPic:String = "true";
      
      private var style:String = "number";
      
      public function Sina()
      {
         super();
         shareUrl = "http://service.weibo.com/share/share.php?type=button&ralateUid=2105799142&language=zh_cn&default_text=";
      }
      
      override public function get url() : String
      {
         shareUrl += "&url=" + shareData.url;
         shareUrl += "&title=" + shareData.title;
         shareUrl += "&pic=";
         var _loc1_:int = 0;
         while(_loc1_ < shareData.pics.length)
         {
            shareUrl += shareData.pics[_loc1_] + "||";
            _loc1_++;
         }
         shareUrl += "&searchPic=" + this.searchPic;
         shareUrl += "&style=" + this.style;
         return shareUrl;
      }
   }
}
