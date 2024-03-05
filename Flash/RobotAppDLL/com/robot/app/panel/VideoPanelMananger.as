package com.robot.app.panel
{
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.external.ExternalInterface;
   import org.taomee.debug.DebugTrace;
   
   public class VideoPanelMananger
   {
      
      private static var _inst:com.robot.app.panel.VideoPanelMananger;
       
      
      private var panel:MovieClip;
      
      private var open:Boolean = false;
      
      private var domainKind:int;
      
      public function VideoPanelMananger()
      {
         var _loc1_:String = null;
         super();
         if(ExternalInterface.available)
         {
            ExternalInterface.addCallback("openVSubject",this.openQSubject);
            ExternalInterface.addCallback("closeVSubject",this.closeQSubject);
            LevelManager.root.addEventListener(MouseEvent.CLICK,this.destroy);
            this.panel = MapManager.currentMap.libManager.getMovieClip("map698AnswerPanel");
            this.panel.x = 250;
            this.panel.y = 100;
            _loc1_ = ExternalInterface.call("getUrlHost");
            if(_loc1_ == "seer.61.com")
            {
               this.domainKind = 1;
            }
            else if(_loc1_ == "www.51seer.com")
            {
               this.domainKind = 2;
            }
            else
            {
               this.domainKind = 0;
            }
         }
      }
      
      public static function get instance() : com.robot.app.panel.VideoPanelMananger
      {
         if(_inst == null)
         {
            _inst = new com.robot.app.panel.VideoPanelMananger();
         }
         return _inst;
      }
      
      public function openMainVideo() : void
      {
         if(this.domainKind == 1)
         {
            LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_13);
         }
         else if(this.domainKind == 2)
         {
            LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_15);
         }
         else
         {
            DebugTrace.show("domainError");
         }
      }
      
      public function showMainVideo(param1:String) : void
      {
         if(ExternalInterface.available)
         {
            this.open = true;
            ExternalInterface.call("openInnerFrame",param1,400,270,82,280);
         }
      }
      
      public function showVideo(param1:String, param2:int = 0, param3:int = 0, param4:int = 0, param5:int = 0) : void
      {
         if(ExternalInterface.available)
         {
            this.open = true;
            ExternalInterface.call("openInnerFrame",param1,param2,param3,param4,param5);
         }
      }
      
      public function closeVideo() : void
      {
         if(ExternalInterface.available)
         {
            this.open = false;
            ExternalInterface.call("closeInnerFrame");
         }
      }
      
      public function showQAPanel(param1:String) : void
      {
         if(ExternalInterface.available)
         {
            SocketConnection.send(1020,50);
            LevelManager.topLevel.addChild(this.panel);
            this.open = true;
            ExternalInterface.call("openInnerFrame",param1,442,382,100,250);
         }
      }
      
      public function openQSubject(param1:* = null) : void
      {
         this.destroy();
         if(this.domainKind == 1)
         {
            LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_14);
         }
         else if(this.domainKind == 2)
         {
            LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_16);
         }
         else
         {
            DebugTrace.show("domainError");
         }
      }
      
      public function closeQSubject(param1:String = null) : void
      {
         this.destroy();
      }
      
      public function destroy(param1:* = null) : void
      {
         if(this.open == false)
         {
            return;
         }
         if(param1)
         {
            if(!(param1.target is MovieClip) && param1.target is Sprite)
            {
               return;
            }
         }
         this.open = false;
         if(this.panel.parent)
         {
            this.panel.parent.removeChild(this.panel);
         }
         if(ExternalInterface.available)
         {
            ExternalInterface.call("closeInnerFrame");
         }
      }
   }
}
