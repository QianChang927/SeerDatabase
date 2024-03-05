package com.robot.core.ui.nono
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import flash.utils.getDefinitionByName;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   import org.taomee.utils.Utils;
   
   public class NonoShortcutKeyItem extends Sprite
   {
      
      public static var isTryFly:int = -1;
       
      
      private const PATH:String = "shortcutKey/";
      
      private var _id:String;
      
      private var _icon:SimpleButton;
      
      private var _handler:Function;
      
      private var _tips:String;
      
      private var _suIcon:Sprite;
      
      private var _isSuper:Boolean;
      
      public function NonoShortcutKeyItem()
      {
         super();
      }
      
      public function setInfo(param1:String, param2:String, param3:Function = null) : void
      {
         var id:String = param1;
         var tip:String = param2;
         var func:Function = param3;
         if(this._id != "")
         {
            ResourceManager.cancel(ClientConfig.getNonoPath(this.PATH + this._id + ".swf"),this.onComHandler);
         }
         if(this._icon)
         {
            ToolTipManager.remove(this._icon);
            this._icon.removeEventListener(MouseEvent.CLICK,this.onIconClickHandler);
            DisplayUtil.removeForParent(this._icon);
            this._icon = null;
         }
         this._id = id;
         this._tips = tip;
         this._handler = func;
         ResourceManager.getResource(ClientConfig.getNonoPath(this.PATH + this._id + ".swf"),this.onComHandler);
         if(isTryFly != -1)
         {
            return;
         }
         isTryFly = 0;
         SocketConnection.addCmdListener(CommandID.FLY_MODE_CHECK,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.FLY_MODE_CHECK,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            isTryFly = _loc3_.readUnsignedInt();
         });
         SocketConnection.send(CommandID.FLY_MODE_CHECK);
      }
      
      private function onComHandler(param1:DisplayObject) : void
      {
         var _loc2_:MovieClip = null;
         if(param1)
         {
            this._icon = param1 as SimpleButton;
            if(this._icon == null)
            {
               _loc2_ = param1 as MovieClip;
               _loc2_.buttonMode = true;
               this.comHandler(_loc2_);
               ToolTipManager.add(_loc2_,this._tips);
            }
            else
            {
               this.comHandler(this._icon);
               ToolTipManager.add(this._icon,this._tips);
            }
         }
      }
      
      private function comHandler(param1:DisplayObject) : void
      {
         var _loc2_:* = undefined;
         param1.x = param1.width / 2;
         param1.y = param1.height / 2;
         this.addChild(param1);
         if(uint(this._id) >= 700000)
         {
            if(ItemXMLInfo.getIsSuper(uint(this._id)))
            {
               if(MainManager.actorInfo.isVip)
               {
                  param1.addEventListener(MouseEvent.CLICK,this.onIconClickHandler);
               }
               else if(isTryFly == 1)
               {
                  param1.addEventListener(MouseEvent.CLICK,this.onIconClickHandler);
               }
               else
               {
                  _loc2_ = Utils.getClass("com.robot.app.mapProcess.control.ColorfulPrivilegeWishController") as Class;
                  if(_loc2_.bonusType == 3)
                  {
                     param1.addEventListener(MouseEvent.CLICK,this.onIconClickHandler);
                  }
                  else
                  {
                     param1.addEventListener(MouseEvent.MOUSE_OVER,this.onIconOverHandler);
                  }
               }
            }
            else
            {
               param1.addEventListener(MouseEvent.CLICK,this.onIconClickHandler);
            }
         }
         else
         {
            param1.addEventListener(MouseEvent.CLICK,this.onIconClickHandler);
         }
      }
      
      private function onIconOverHandler(param1:MouseEvent) : void
      {
         ToolTipManager.remove(this._icon);
         DisplayUtil.removeForParent(this._icon);
         this._suIcon = UIManager.getMovieClip("SuperIcon_Mc");
         this._suIcon.x = -4;
         this._suIcon.y = -4;
         this._suIcon.addEventListener(MouseEvent.MOUSE_OUT,this.onIconOutHandler);
         this._suIcon.addEventListener(MouseEvent.CLICK,this.onSuIconClickHandler);
         this.addChild(this._suIcon);
      }
      
      private function onSuIconClickHandler(param1:MouseEvent) : void
      {
         var _loc2_:* = getDefinitionByName("com.robot.app.linkManager.LinkToUrlManager");
         _loc2_.linkUrl(_loc2_.LINK_TYPE_4);
      }
      
      private function onIconOutHandler(param1:MouseEvent) : void
      {
         this._suIcon.removeEventListener(MouseEvent.CLICK,this.onIconClickHandler);
         this._suIcon.removeEventListener(MouseEvent.MOUSE_OUT,this.onIconOutHandler);
         ToolTipManager.remove(this._suIcon);
         DisplayUtil.removeForParent(this._suIcon);
         this._suIcon = null;
         this._icon.x = this._icon.width / 2;
         this._icon.y = this._icon.height / 2;
         ToolTipManager.add(this._icon,this._tips);
         this.addChild(this._icon);
      }
      
      private function onIconClickHandler(param1:MouseEvent) : void
      {
         var cls:Class = null;
         var e:MouseEvent = param1;
         if(this._id == "700017")
         {
            SocketConnection.send(1020,227);
         }
         if(this._handler != null)
         {
            this._handler();
         }
         try
         {
            cls = Utils.getClass("com.robot.app.nono.featureApp.App_" + this._id);
            if(Boolean(cls) && this._id != "700018")
            {
               new cls();
            }
         }
         catch(e:Error)
         {
            DebugTrace.show("error==" + e.message);
         }
      }
      
      public function destroy() : void
      {
         if(this._id != "")
         {
            ResourceManager.cancel(ClientConfig.getNonoPath(this.PATH + this._id + ".swf"),this.onComHandler);
         }
         if(this._icon)
         {
            ToolTipManager.remove(this._icon);
            this._icon.removeEventListener(MouseEvent.CLICK,this.onIconClickHandler);
            DisplayUtil.removeForParent(this._icon);
            this._icon = null;
         }
         if(this._suIcon)
         {
            this._suIcon.removeEventListener(MouseEvent.CLICK,this.onIconClickHandler);
            this._suIcon.removeEventListener(MouseEvent.MOUSE_OUT,this.onIconOutHandler);
            DisplayUtil.removeForParent(this._suIcon);
            this._suIcon = null;
         }
      }
   }
}
