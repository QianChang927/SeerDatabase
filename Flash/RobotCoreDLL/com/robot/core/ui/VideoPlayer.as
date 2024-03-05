package com.robot.core.ui
{
   import com.robot.core.SoundManager;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.NetStatusEvent;
   import flash.media.Video;
   import flash.net.NetConnection;
   import flash.net.NetStream;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.EventManager;
   
   public class VideoPlayer extends Sprite
   {
       
      
      private var netStream:NetStream;
      
      private var video:Video;
      
      private var netConnection:NetConnection;
      
      private var flvUrl:String;
      
      public function VideoPlayer(param1:String)
      {
         super();
         this.netConnection = new NetConnection();
         this.netConnection.connect(null);
         this.netStream = new NetStream(this.netConnection);
         this.netStream.client = {"onMetaData":this.metaDataHandler};
         this.netStream.addEventListener(NetStatusEvent.NET_STATUS,this.netStatusHandler);
         this.addEventListener(Event.ENTER_FRAME,this.getProcessHandler);
         this.video = new Video();
         this.video.attachNetStream(this.netStream);
         this.addChild(this.video);
         this.flvUrl = param1;
         this.netStream.play(this.flvUrl);
      }
      
      public function changeUrl(param1:Object = null) : void
      {
         var _loc2_:String = param1 as String;
         if(_loc2_ != this.flvUrl)
         {
            this.flvUrl = _loc2_;
            this.netStream.play(this.flvUrl);
         }
      }
      
      private function netStatusHandler(param1:NetStatusEvent) : void
      {
         switch(param1.info.code)
         {
            case "NetStream.Play.Start":
               break;
            case "NetStream.Play.Stop":
               this.netStream.seek(0);
               this.netStream.resume();
               break;
            case "NetStream.Play.StreamNotFound":
         }
      }
      
      private function getProcessHandler(param1:Event) : void
      {
         if(this.netStream == null)
         {
            return;
         }
         var _loc2_:uint = this.netStream.bytesLoaded;
         var _loc3_:uint = this.netStream.bytesTotal;
         if(_loc2_ == _loc3_)
         {
            SoundManager.stopSound();
            this.removeEventListener(Event.ENTER_FRAME,this.getProcessHandler);
            EventManager.dispatchEvent(new Event("video_loading_over"));
         }
         else
         {
            EventManager.dispatchEvent(new DynamicEvent("video_loading_pro",{
               "t":_loc3_,
               "l":_loc2_
            }));
         }
      }
      
      private function metaDataHandler(param1:Object) : void
      {
         this.video.width = param1.width;
         this.video.height = param1.height;
         this.video.width = 960;
         this.video.height = 560;
         this.video.x = (960 - this.video.width) / 2;
         this.video.y = (560 - this.video.height) / 2;
      }
      
      public function destroy() : void
      {
         this.removeEventListener(Event.ENTER_FRAME,this.getProcessHandler);
         if(this.video)
         {
            this.video.clear();
            this.removeChild(this.video);
            this.video = null;
         }
         if(this.netStream)
         {
            this.netStream.removeEventListener(NetStatusEvent.NET_STATUS,this.netStatusHandler);
            this.netStream.close();
            this.netStream = null;
         }
         if(this.netConnection)
         {
            this.netConnection.close();
            this.netConnection = null;
         }
         if(this.parent)
         {
            this.parent.removeChild(this);
         }
         SoundManager.playSound();
      }
   }
}
