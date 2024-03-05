package com.robot.app2.systems.iconLevel
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.RedSysXmlInfo;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.controller.RedSystemController;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.TaskIconManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.MoreFont;
   import flash.display.Bitmap;
   import flash.display.MovieClip;
   import flash.display.Shape;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.filters.GlowFilter;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   import flash.text.TextField;
   import flash.text.TextFieldAutoSize;
   import flash.text.TextFormat;
   import flash.utils.getDefinitionByName;
   import org.taomee.ds.HashMap;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class IconView
   {
       
      
      protected var _ui:MovieClip;
      
      public var url:String;
      
      public var tips:String;
      
      public var direction:String;
      
      public var priority:int;
      
      public var exMapList:Array;
      
      public var mouseClickFunc:Function;
      
      public var initFunc:Function;
      
      public var _time:String;
      
      protected var _type:int;
      
      protected var _str:String;
      
      protected var _addToIcon:Boolean;
      
      protected var _initFun:Boolean;
      
      protected var _iconTxt:String;
      
      public var showNewseer:int;
      
      protected var textPic:Bitmap;
      
      public var redIds:Array;
      
      protected var redPointMc:MovieClip;
      
      public function IconView(param1:String, param2:int, param3:String, param4:String, param5:String, param6:String, param7:String, param8:String = "", param9:String = "", param10:int = 0, param11:int = 0)
      {
         var _loc17_:Array = null;
         var _loc18_:Class = null;
         super();
         this.redIds = RedSysXmlInfo.getIdByIcon(param4);
         this.redPointMc = UIManager.getMovieClip("redPoint");
         this.showNewseer = param11;
         this.direction = param1;
         this.priority = param2;
         this._str = param7;
         this.tips = param5;
         this.url = param4;
         this._time = param9;
         this._iconTxt = param6;
         if(param3 != "")
         {
            this.exMapList = param3.split(" ");
         }
         else
         {
            this.exMapList = null;
         }
         if(param8 != "")
         {
            _loc17_ = param8.split(":");
            _loc18_ = getDefinitionByName(String(_loc17_[0])) as Class;
            this.initFunc = _loc18_[String(_loc17_[1])];
         }
         var _loc12_:RegExp = /app:/;
         var _loc13_:RegExp = /map:/;
         var _loc14_:RegExp = /mapApp:/;
         var _loc15_:RegExp = /url:/;
         var _loc16_:RegExp = /alarm:/;
         if(param7.search(_loc12_) == 0)
         {
            this._type = 1;
         }
         else if(param7.search(_loc13_) == 0)
         {
            this._type = 2;
         }
         else if(param7.search(_loc14_) == 0)
         {
            this._type = 3;
         }
         else if(param7.search(_loc15_) == 0)
         {
            this._type = 4;
         }
         else if(param7.search(_loc16_) == 0)
         {
            this._type = 5;
         }
         this.loadIcon(param10);
      }
      
      protected function loadIcon(param1:int) : void
      {
         var isSubIcon:int = param1;
         ResourceManager.getResource(ClientConfig.getUiIcon(this.url),function(param1:MovieClip):void
         {
            param1.addChild(redPointMc);
            redPointMc.x = 42;
            redPointMc.y = 10;
            _ui = param1;
            if(_iconTxt != null && _iconTxt != "")
            {
               addIconText();
               addicontxtToui();
            }
            if(_addToIcon && isSubIcon == 0)
            {
               addToIconLevel();
            }
            else if(isSubIcon == 1)
            {
               addIconEvent();
               if(initFunc != null && !_initFun)
               {
                  _initFun = true;
                  initFunc(_ui);
               }
            }
         },this.url);
      }
      
      protected function addIconText() : void
      {
         var _loc4_:Shape = null;
         var _loc1_:Sprite = new Sprite();
         var _loc2_:TextField = new TextField();
         var _loc3_:TextFormat = new TextFormat();
         _loc3_.size = 12;
         _loc3_.color = 16777215;
         _loc3_.font = MoreFont.getHuaKangJianZongyiFontName();
         _loc2_.defaultTextFormat = _loc3_;
         _loc2_.autoSize = TextFieldAutoSize.LEFT;
         _loc2_.text = this._iconTxt;
         _loc2_.embedFonts = true;
         _loc2_.cacheAsBitmap = true;
         _loc1_.addChild(_loc2_);
         _loc4_ = new Shape();
         this.drawBack(_loc4_,0,1,_loc2_.width,_loc2_.height);
         _loc4_.cacheAsBitmap = true;
         _loc4_.mask = _loc2_;
         _loc1_.addChild(_loc4_);
         var _loc5_:GlowFilter = new GlowFilter(6697728,1,4,4,10);
         _loc1_.filters = [_loc5_];
         this.textPic = DisplayUtil.copyDisplayAsBmp(_loc1_,true);
         this.textPic.x = 27 - this.textPic.width / 2;
         this.textPic.y = 36;
      }
      
      protected function addicontxtToui() : void
      {
         this._ui.txtContainer.mouseEnabled = false;
         this._ui.txtContainer.mouseChildren = false;
         this._ui.txtContainer.addChild(this.textPic);
      }
      
      protected function drawBack(param1:*, param2:int, param3:int, param4:int, param5:int) : void
      {
         param1.graphics.beginFill(16777215);
         param1.graphics.drawRect(param2,param3,param4,param5 / 2);
         param1.graphics.endFill();
         param1.graphics.beginFill(16763904);
         param1.graphics.drawRect(param2,param3 + param5 / 2,param4,param5 / 2);
         param1.graphics.endFill();
      }
      
      public function get ui() : MovieClip
      {
         return this._ui;
      }
      
      public function set ui(param1:MovieClip) : void
      {
         this._ui = param1;
      }
      
      public function addToIconLevel() : void
      {
         if(this.showNewseer == 0 && Boolean(NewSeerTaskController.isNewSeer) || !NewSeerTaskController.isNewSeer && this.showNewseer == 2)
         {
            return;
         }
         this._addToIcon = true;
         if(this._ui == null || !TaskIconManager.getIsInActivityTime(this._time))
         {
            return;
         }
         this._ui.cacheAsBitmap = true;
         this._ui.buttonMode = true;
         this.addIconEvent();
         if(DisplayUtil.hasParent(this._ui) == false)
         {
            TaskIconManager.addIcon(this.ui,this.direction,this.priority,this.exMapList);
            EventManager.dispatchEvent(new DynamicEvent("iconAdded",this));
            if(this.initFunc != null && !this._initFun)
            {
               this._initFun = true;
               this.initFunc(this._ui);
            }
         }
      }
      
      private function addIconEvent() : void
      {
         if(DisplayUtil.hasParent(this._ui) == false)
         {
            if(this.tips != "")
            {
               ToolTipManager.add(this._ui,this.tips);
            }
            if(!this._ui.hasEventListener(MouseEvent.CLICK))
            {
               this._ui.addEventListener(MouseEvent.CLICK,this.onClick);
            }
         }
      }
      
      public function checkRed() : Boolean
      {
         var _loc3_:int = 0;
         var _loc1_:Boolean = false;
         var _loc2_:HashMap = RedSystemController.instance.getredHash();
         if(this.redPointMc)
         {
            if(this.redIds.length)
            {
               _loc3_ = 0;
               while(_loc3_ < this.redIds.length)
               {
                  if(_loc2_.getValue(this.redIds[_loc3_]) == 1)
                  {
                     _loc1_ = true;
                  }
                  _loc3_++;
               }
               this.redPointMc.visible = _loc1_;
            }
            else
            {
               this.redPointMc.visible = false;
            }
         }
         return _loc1_;
      }
      
      protected function onClick(param1:MouseEvent) : void
      {
         var fList:Array;
         var i:int = 0;
         var isClick:Boolean = false;
         var cls1:Class = null;
         var func:Function = null;
         var arr:Array = null;
         var mapid:int = 0;
         var e:MouseEvent = param1;
         if(this.tips != "")
         {
            StatManager.sendStat2014("主界面icon",this.tips,"主界面icon");
            StatManager.sendStat2014("点击新版icon","点击" + this.tips + "icon","新主界面icon");
         }
         if(this.redIds.length)
         {
            i = 0;
            while(i < this.redIds.length)
            {
               isClick = Boolean(RedSysXmlInfo.getIsClickById(this.redIds[i],1));
               if(isClick)
               {
                  RedSystemController.instance.sendRedClickHandle(this.redIds[i]);
               }
               i++;
            }
         }
         if(this._str.length == 0)
         {
            return;
         }
         fList = this._str.split(":");
         if(this._type == 0)
         {
            cls1 = getDefinitionByName(String(fList[0])) as Class;
            func = cls1[String(fList[1])];
            func(this._ui);
         }
         else if(this._type == 1)
         {
            ModuleManager.showModule(ClientConfig.getAppModule(fList[1]));
         }
         else if(this._type == 2)
         {
            MapManager.changeMap(int(fList[1]));
         }
         else if(this._type == 3)
         {
            arr = String(fList[1]).split(",");
            mapid = int(arr[0]);
            KTool.changeMapWithCallBack(mapid,function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule(arr[1]));
            });
         }
         else if(this._type == 4)
         {
            navigateToURL(new URLRequest(this._str.replace("url:","")),"_blank");
         }
         else if(this._type == 5)
         {
            Alarm.show(fList[1]);
         }
      }
      
      public function removeFromIconLevel() : void
      {
         this._addToIcon = false;
         this._initFun = false;
         if(this._ui)
         {
            ToolTipManager.remove(this._ui);
            this._ui.removeEventListener(MouseEvent.CLICK,this.onClick);
            if(DisplayUtil.hasParent(this._ui))
            {
               TaskIconManager.delIcon(this._ui);
            }
         }
      }
   }
}
