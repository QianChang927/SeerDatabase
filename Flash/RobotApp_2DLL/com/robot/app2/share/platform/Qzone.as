package com.robot.app2.share.platform
{
   public class Qzone extends PlatForm
   {
       
      
      private var width:int = 98;
      
      private var height:int = 22;
      
      private var style:String = "203";
      
      private var showcount:String = "1";
      
      public function Qzone()
      {
         super();
         shareUrl = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?";
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
         shareUrl += "&site=" + shareData.site;
         shareUrl += "&showcount=" + this.showcount;
         shareUrl += "&style=" + this.style;
         shareUrl += "&width=" + this.width;
         shareUrl += "&height=" + this.height;
         return shareUrl;
      }
   }
}
