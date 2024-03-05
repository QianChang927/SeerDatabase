package com.robot.app2.share.platform
{
   public class Qq extends PlatForm
   {
       
      
      private var width:int = 32;
      
      private var height:int = 32;
      
      private var style:String = "201";
      
      public function Qq()
      {
         super();
         shareUrl = "http://connect.qq.com/widget/shareqq/index.html?";
      }
      
      override public function get url() : String
      {
         shareUrl += "url=" + shareData.url;
         shareUrl += "&title=" + shareData.title;
         shareUrl += "&desc=" + shareData.desc;
         shareUrl += "&summary=" + shareData.summary;
         shareUrl += "&pics=";
         var _loc1_:int = 0;
         while(_loc1_ < shareData.pics.length)
         {
            shareUrl += shareData.pics[_loc1_] + "|";
            _loc1_++;
         }
         shareUrl += "&flash=" + shareData.flash;
         shareUrl += "&site=" + shareData.site;
         shareUrl += "&style=" + this.style;
         shareUrl += "&width=" + this.width;
         shareUrl += "&height=" + this.height;
         return shareUrl;
      }
   }
}
