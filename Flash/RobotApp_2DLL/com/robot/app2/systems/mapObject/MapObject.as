package com.robot.app2.systems.mapObject
{
   import com.robot.app.task.petstory.util.BtnClick;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.Bitmap;
   import flash.display.DisplayObjectContainer;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   import org.taomee.manager.DepthManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MapObject extends InteractivePNG
   {
       
      
      private var _xml:XML;
      
      private var _scale:Number = 1;
      
      private var btnMv:MovieClip;
      
      private var btnPic:Bitmap;
      
      public var tip:String;
      
      public var btnClick:BtnClick;
      
      private var _isFlipHorizontally:Boolean = false;
      
      public var countID:int;
      
      private var _objCountID:int;
      
      private var _oldy:Number;
      
      private var _oldx:Number;
      
      private var _icon:MovieClip;
      
      private var _btnLayer:Sprite;
      
      private var _iconLayer:Sprite;
      
      public function MapObject(param1:String, param2:Number, param3:Number, param4:String = "", param5:Number = 1, param6:Boolean = false)
      {
         this._btnLayer = new Sprite();
         this._iconLayer = new Sprite();
         super();
         this.name = param1;
         mouseChildren = false;
         buttonMode = true;
         super.x = param2;
         super.y = param3;
         this._oldx = param2;
         this._oldy = param3;
         this.tip = param4;
         this._scale = param5;
         this._isFlipHorizontally = param6;
         addEventListener(MouseEvent.MOUSE_OVER,this.onMouseOver);
         MapListenerManager.add(this,this.onClick,param4);
      }
      
      public function setIcon(param1:MovieClip) : void
      {
         DisplayUtil.removeAllChild(this._iconLayer);
         this._icon = param1;
         if(param1)
         {
            this._iconLayer.addChild(param1);
         }
      }
      
      private function onMouseDown(param1:*) : void
      {
         this._oldx = x;
         this._oldy = y;
         this.onMouseOut(null);
         startDrag();
      }
      
      private function onMouseUp(param1:*) : void
      {
         stopDrag();
         this.x = x;
         this.y = y;
         DepthManager.swapDepthAll(MapManager.currentMap.depthLevel);
      }
      
      private function onClick(param1:*) : void
      {
         var params:Array = null;
         var buffer:int = 0;
         var e:* = param1;
         if(this._oldx != x || this._oldy != y)
         {
            return;
         }
         if(ModuleManager.hasModule(ClientConfig.getAppModule("MapObjEditorPanel")))
         {
            return;
         }
         this.addStat();
         this.btnClick.onClick();
         if(this.btnClick.type == "func")
         {
            try
            {
               MapObjectProcessFuns[this.btnClick.content]();
            }
            catch(e:*)
            {
               throw new Error("no fun " + btnClick.content + "      or fun error");
            }
         }
         else if(this.btnClick.type == "url")
         {
            navigateToURL(new URLRequest(this.btnClick.content),"_blank");
         }
         else if(this.btnClick.type == "movie|module")
         {
            params = this.btnClick.content.split(";");
            buffer = int(params[0]);
            if(!BufferRecordManager.getMyState(buffer))
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie(params[1]),function():void
               {
                  BufferRecordManager.setMyState(buffer,true);
                  BtnClick.parseModule(params[2]);
                  if(int(params[3]) > 0)
                  {
                     SocketConnection.send(1022,int(params[3]));
                  }
               });
            }
            else
            {
               BtnClick.parseModule(params[2]);
            }
         }
         if(this.countID > 0)
         {
            SocketConnection.send(1022,this.countID);
         }
         if(this.objCountID > 0)
         {
            SocketConnection.send(1022,this.objCountID);
         }
      }
      
      private function addStat() : void
      {
         var _loc1_:uint = 0;
         var _loc3_:String = null;
         if(MapManager.currentMap)
         {
            if(MapManager.currentMap.id < 50000)
            {
               _loc1_ = uint(MapManager.currentMap.id);
            }
            else
            {
               _loc1_ = 50000;
            }
         }
         var _loc2_:* = _loc1_.toString() + "号场景";
         if(this.tip != null && this.tip.length > 0)
         {
            _loc3_ = this.tip;
         }
         else
         {
            _loc3_ = name;
         }
         var _loc4_:String = "场景装置";
         StatManager.sendStat2014("所有map集合",_loc3_,_loc4_);
         StatManager.sendStat2014(_loc2_,_loc3_,_loc4_);
      }
      
      override protected function trackMouseWhileInBounds(param1:Event = null) : void
      {
         super.trackMouseWhileInBounds(param1);
         if(!_bitmapHit)
         {
            this.onMouseOut(null);
         }
      }
      
      protected function onMouseOver(param1:Event) : void
      {
         if(Boolean(this.btnPic) && contains(this.btnPic))
         {
            this._btnLayer.addChild(this.btnMv);
            this.btnMv.gotoAndStop(2);
            this._btnLayer.removeChild(this.btnPic);
         }
      }
      
      protected function onMouseOut(param1:Event) : void
      {
         if(Boolean(this.btnMv) && contains(this.btnMv))
         {
            this._btnLayer.addChild(this.btnPic);
            this._btnLayer.removeChild(this.btnMv);
            this.btnMv.gotoAndStop(3);
         }
      }
      
      public function loadView() : void
      {
         ResourceManager.getResource(this.url,this.onLoadView,"item",3,false);
      }
      
      protected function onLoadView(param1:MovieClip) : void
      {
         var _loc2_:DisplayObjectContainer = this;
         DisplayUtil.removeAllChild(_loc2_);
         DisplayUtil.removeAllChild(this._btnLayer);
         param1.scaleX = param1.scaleY = this.scale;
         if(this.isFlipHorizontally)
         {
            param1.scaleX = -1 * param1.scaleX;
         }
         this.btnMv = param1;
         this.btnMv.gotoAndStop(1);
         this.btnMv.mouseChildren = this.btnMv.mouseEnabled = false;
         this.btnPic = DisplayUtil.copyDisplayAsBmp(this.btnMv);
         addChild(this.btnPic);
         drawBitmapHitArea();
         this._btnLayer.addChild(this.btnPic);
         this.addChild(this._btnLayer);
         this.addChild(this._iconLayer);
         DisplayUtil.removeAllChild(this.btnMv);
         this.btnMv.gotoAndStop(3);
      }
      
      public function destory() : void
      {
         if(Boolean(this.btnPic) && Boolean(this.btnPic.bitmapData))
         {
            this.btnPic.bitmapData.dispose();
         }
         deactivateMouseTrap();
         disableInteractivePNG();
         DisplayUtil.removeForParent(this.btnMv);
         this.btnMv = null;
         this.btnPic = null;
         removeEventListener(MouseEvent.MOUSE_OVER,this.onMouseOver);
         removeEventListener(MouseEvent.MOUSE_OUT,this.onMouseOut);
         removeEventListener(MouseEvent.MOUSE_DOWN,this.onMouseDown);
         removeEventListener(MouseEvent.MOUSE_UP,this.onMouseUp);
      }
      
      public function get url() : String
      {
         return ClientConfig.getAppRes("mapobj/" + name);
      }
      
      public function get scale() : Number
      {
         return this._scale;
      }
      
      public function set scale(param1:Number) : void
      {
         this._scale = param1;
         this._xml.@scale = param1;
         this.loadView();
      }
      
      public function get isFlipHorizontally() : Boolean
      {
         return this._isFlipHorizontally;
      }
      
      public function set isFlipHorizontally(param1:Boolean) : void
      {
         this._isFlipHorizontally = param1;
         this._xml.@isFlipHorizontally = param1;
         this.loadView();
      }
      
      override public function set x(param1:Number) : void
      {
         super.x = param1;
         this._xml.@x = param1;
      }
      
      override public function set y(param1:Number) : void
      {
         super.y = param1;
         this._xml.@y = param1;
      }
      
      public function set objCountID(param1:int) : void
      {
         this._objCountID = param1;
         this._xml.@objCountID = this.formatCountID(param1.toString(16));
      }
      
      public function getDes() : String
      {
         return this._xml.@des;
      }
      
      private function formatCountID(param1:String) : String
      {
         var _loc2_:String = param1.toUpperCase();
         var _loc3_:int = 0;
         while(_loc3_ < 8 - param1.length)
         {
            _loc2_ = "0" + _loc2_;
            _loc3_++;
         }
         return "0x" + _loc2_;
      }
      
      public function get objCountID() : int
      {
         if(this._xml.@objCountID)
         {
            return int(this._xml.@objCountID);
         }
         return 0;
      }
      
      public function get xml() : XML
      {
         return this._xml;
      }
      
      public function set xml(param1:XML) : void
      {
         this._xml = param1;
      }
      
      public function remove() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < this._xml.parent().object.length())
         {
            if(this._xml.parent().object[_loc1_].@name == name)
            {
               delete this._xml.parent().object[_loc1_];
               break;
            }
            _loc1_++;
         }
         this.destory();
         DisplayUtil.removeForParent(this);
      }
   }
}
