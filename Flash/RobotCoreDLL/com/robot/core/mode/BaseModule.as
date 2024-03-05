package com.robot.core.mode
{
   import com.codecatalyst.promise.Promise;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.mode.components.EventComponent;
   import com.robot.core.mode.components.IComponent;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.itemTip.ItemInfoTip;
   import com.robot.core.utils.CommonUI;
   import flash.display.DisplayObject;
   import flash.display.InteractiveObject;
   import flash.display.MovieClip;
   import flash.display.Shape;
   import flash.display.Sprite;
   import flash.system.ApplicationDomain;
   import flash.utils.getDefinitionByName;
   import flash.utils.getQualifiedClassName;
   import org.taomee.ds.HashSet;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.module.IModule;
   
   public class BaseModule extends Sprite implements IModule
   {
       
      
      protected var _ui:MovieClip;
      
      private var _resUrl:String = "";
      
      private var _isRmoveScene:Boolean = true;
      
      private var components:Vector.<IComponent>;
      
      private var _eventCom:EventComponent;
      
      protected var _domain:ApplicationDomain;
      
      private var _tipObjs:HashSet;
      
      protected var _addBlackBg:Boolean = false;
      
      private var _panelName:String;
      
      public function BaseModule()
      {
         this.components = new Vector.<IComponent>();
         super();
         this._eventCom = new EventComponent();
         this.addComponent(this._eventCom);
         var _loc1_:* = getDefinitionByName("com.robot.app2.control.jsControl.JSController");
         _loc1_.instance.addEventListener("JS-EVENT",this.onJSEvent);
         this._panelName = getQualifiedClassName(this).split("::").pop();
      }
      
      private function onJSEvent(param1:*) : void
      {
         var _loc2_:* = undefined;
         var _loc3_:String = null;
         var _loc4_:* = undefined;
         if(param1.command == "call_module_fun")
         {
            _loc2_ = JSON.parse(param1.args);
            if(_loc2_.moduleName != this._panelName)
            {
               return;
            }
            _loc3_ = String(_loc2_.funName);
            _loc4_ = _loc2_.args;
            this.jsCallFun(_loc3_,_loc4_);
         }
      }
      
      protected function jsCallFun(param1:String, param2:*) : void
      {
      }
      
      public function addComponent(param1:IComponent) : void
      {
         if(this.components.indexOf(param1) == -1)
         {
            this.components.push(param1);
         }
      }
      
      public function destroy() : void
      {
         var _loc2_:int = 0;
         var _loc3_:int = 0;
         ModuleManager.destroyForInstance(this);
         if(this._ui)
         {
            if(this._isRmoveScene)
            {
               LevelManager.showOrRemoveMapLevelandToolslevel(true,false,this._resUrl);
            }
            if(LevelManager.appLevel.contains(this._ui))
            {
               this._ui.parent.removeChild(this._ui);
            }
            this._ui = null;
         }
         if(this.components)
         {
            _loc2_ = int(this.components.length);
            _loc3_ = 0;
            while(_loc3_ < _loc2_)
            {
               this.components[_loc3_].destroy();
               _loc3_++;
            }
            this.components = null;
            this._eventCom = null;
         }
         this.clearTips();
         this._domain = null;
         this._addBlackBg = false;
         var _loc1_:* = getDefinitionByName("com.robot.app2.control.jsControl.JSController");
         _loc1_.instance.removeEventListener("JS-EVENT",this.onJSEvent);
      }
      
      public function hide() : void
      {
         ItemInfoTip.hide();
         this.destroy();
      }
      
      public function init(param1:Object = null) : void
      {
      }
      
      public function setup() : void
      {
      }
      
      public function show() : void
      {
         if(this._isRmoveScene)
         {
            LevelManager.showOrRemoveMapLevelandToolslevel(false,true,this._resUrl);
         }
         if(this._ui == null)
         {
            return;
         }
         this.addBlackBg();
         CommonUI.resetUiAllTxtFont(this._ui);
         LevelManager.appLevel.addChild(this._ui);
      }
      
      public function initResource(param1:MCLoadEvent) : void
      {
         this._domain = param1.getApplicationDomain();
         this._ui = param1.getContent() as MovieClip;
      }
      
      protected function addBlackBg() : void
      {
         if(!this._addBlackBg)
         {
            return;
         }
         var _loc1_:Shape = new Shape();
         _loc1_.graphics.beginFill(0,0.7);
         _loc1_.graphics.drawRect(0,0,MainManager.getStageWidth(),MainManager.getStageHeight());
         _loc1_.graphics.endFill();
         var _loc2_:Sprite = new Sprite();
         _loc2_.addChild(_loc1_);
         this._ui.addChildAt(_loc2_,0);
      }
      
      protected function sendCmdWithPromise(param1:int, param2:Array) : Promise
      {
         this.closeEvent();
         var _loc3_:Promise = SocketConnection.sendWithPromise(param1,param2);
         _loc3_.always(this.openEvent);
         return _loc3_;
      }
      
      protected function sendCmd(param1:int, param2:Array, param3:Function = null, param4:Function = null, param5:Boolean = false) : void
      {
         var cmdId:int = param1;
         var params:Array = param2;
         var callback:Function = param3;
         var errorCallback:Function = param4;
         var neddReturnValue:Boolean = param5;
         if(this._ui != null)
         {
            this._ui.mouseChildren = this._ui.mouseEnabled = false;
         }
         SocketConnection.sendByQueue(cmdId,params,function(param1:*):void
         {
            if(_ui != null)
            {
               _ui.mouseChildren = _ui.mouseEnabled = true;
            }
            if(null != callback)
            {
               if(callback.length == 0 || neddReturnValue == false)
               {
                  callback();
               }
               else
               {
                  callback(param1);
               }
            }
         },function(param1:*):void
         {
            if(null != errorCallback)
            {
               errorCallback();
            }
            if(_ui != null)
            {
               _ui.mouseChildren = _ui.mouseEnabled = true;
            }
         });
      }
      
      public function getSymbolFromLib(param1:String) : *
      {
         var _loc2_:Object = null;
         var _loc3_:Class = this._domain.getDefinition(param1) as Class;
         if(_loc3_)
         {
            _loc2_ = new _loc3_();
         }
         return _loc2_;
      }
      
      public function get domain() : ApplicationDomain
      {
         return this._domain;
      }
      
      public function get resUrl() : String
      {
         return this._resUrl;
      }
      
      public function set resUrl(param1:String) : void
      {
         this._resUrl = param1;
      }
      
      public function get isRmoveScene() : Boolean
      {
         return this._isRmoveScene;
      }
      
      public function set isRmoveScene(param1:Boolean) : void
      {
         this._isRmoveScene = param1;
      }
      
      public function get eventCom() : EventComponent
      {
         return this._eventCom;
      }
      
      public function get ui() : MovieClip
      {
         return this._ui;
      }
      
      public function doFirstFull(param1:uint, param2:String = "", param3:Function = null) : Boolean
      {
         var buffID:uint = param1;
         var fullstring:String = param2;
         var func:Function = param3;
         if(BitBuffSetClass.getState(buffID) == 0)
         {
            BitBuffSetClass.setState(buffID,1);
            this.eventCom.destroy();
            this.hide();
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie(fullstring),function():void
            {
               if(null != func)
               {
                  func();
               }
               else
               {
                  ModuleManager.showAppModule(_panelName);
               }
            });
            return true;
         }
         return false;
      }
      
      protected function closeEvent() : void
      {
         if(this._ui != null)
         {
            this._ui.mouseChildren = this._ui.mouseEnabled = false;
         }
      }
      
      protected function openEvent() : void
      {
         if(this._ui != null)
         {
            this._ui.mouseChildren = this._ui.mouseEnabled = true;
         }
      }
      
      protected function addItemTip(param1:DisplayObject, param2:int) : void
      {
         var info:SingleItemInfo = null;
         var obj:DisplayObject = param1;
         var itemId:int = param2;
         info = ItemManager.getInfo(itemId);
         if(info == null)
         {
            info = new SingleItemInfo();
            info.itemID = itemId;
         }
         this._eventCom.addMouseOverEvent(obj as InteractiveObject,function():void
         {
            ItemInfoTip.show(info);
         });
         this._eventCom.addMouseOutEvent(obj as InteractiveObject,function():void
         {
            ItemInfoTip.hide();
         });
      }
      
      protected function addToolTip(param1:DisplayObject, param2:String) : void
      {
         ToolTipManager.add(param1 as InteractiveObject,param2);
         if(null == this._tipObjs)
         {
            this._tipObjs = new HashSet();
         }
         this._tipObjs.add(param1);
      }
      
      protected function clearTips() : void
      {
         var _loc2_:InteractiveObject = null;
         if(this._tipObjs == null)
         {
            return;
         }
         var _loc1_:Array = this._tipObjs.toArray();
         for each(_loc2_ in _loc1_)
         {
            ToolTipManager.remove(_loc2_);
            this._tipObjs.remove(_loc2_);
         }
         this._tipObjs.clear();
         this._tipObjs = null;
      }
   }
}
