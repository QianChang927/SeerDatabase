package com.robot.app2.control.newSeer2015
{
   import com.robot.app2.systems.iconLevel.IconController;
   import com.robot.app2.systems.iconLevel.IconView;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.newloader.SeerUrlLoader;
   import org.taomee.ds.HashMap;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.EventManager;
   
   public class NewSeerIcon
   {
      
      public static const ICON_OFFSET:int = 660;
      
      public static const ICON_ADDED:String = "iconAdded";
      
      private static var _ins:com.robot.app2.control.newSeer2015.NewSeerIcon;
       
      
      private var _config:XML;
      
      private var _hideArr:Array;
      
      private var _icons:HashMap;
      
      public function NewSeerIcon()
      {
         this._hideArr = [];
         this._icons = new HashMap();
         super();
      }
      
      public static function get instance() : com.robot.app2.control.newSeer2015.NewSeerIcon
      {
         return _ins || (_ins = new com.robot.app2.control.newSeer2015.NewSeerIcon());
      }
      
      public static function initIconLevel() : void
      {
         LevelManager.iconLevel.y = ICON_OFFSET;
      }
      
      public function init() : void
      {
         var loader:SeerUrlLoader;
         EventManager.addEventListener(ICON_ADDED,this.onIconAdd);
         loader = new SeerUrlLoader("加载ICON配置文件");
         loader.doLoad(ClientConfig.getAppRes("newSeer2015/icon/new_seer_icon",".xml"),function(param1:*):void
         {
            _config = XML(param1);
            parse();
         });
      }
      
      private function onIconAdd(param1:DynamicEvent) : void
      {
         var _loc2_:NewSeerIconView = param1.paramObject as NewSeerIconView;
         if(_loc2_ && this._hideArr.indexOf(_loc2_.url) != -1 && Boolean(_loc2_.ui))
         {
            _loc2_.ui.visible = false;
            this._hideArr.splice(this._hideArr.indexOf(_loc2_.url),1);
         }
      }
      
      private function parse() : void
      {
         var _loc1_:XML = null;
         var _loc2_:NewSeerIconView = null;
         for each(_loc1_ in this._config.icon)
         {
            _loc2_ = new NewSeerIconView(_loc1_.@tips,_loc1_.@ui,_loc1_.@needLoad == "false" ? false : true,_loc1_.@click,int(_loc1_.@xPos),int(_loc1_.@yPos));
            this._icons.add(String(_loc1_.@ui),_loc2_);
         }
      }
      
      public function destroy() : void
      {
         var view:NewSeerIconView = null;
         EventManager.removeEventListener(ICON_ADDED,this.onIconAdd);
         if(this._icons)
         {
            for each(view in this._icons.getValues())
            {
               view.destroy();
            }
            this._icons.clear();
            this._icons = null;
         }
         this._config = null;
         this._hideArr = null;
         LevelManager.iconLevel.y = 0;
         IconController.eachIcon(function(param1:IconView):void
         {
            if(["right","right_side","right_bar"].indexOf(param1.direction) != -1)
            {
               if(Boolean(param1.ui) && param1.ui.y < 0)
               {
                  param1.ui.y += ICON_OFFSET;
               }
            }
         });
      }
      
      public function remove(param1:String) : void
      {
         var _loc2_:NewSeerIconView = this._icons.getValue(param1);
         if(_loc2_)
         {
            _loc2_.destroy();
            this._icons.remove(param1);
         }
      }
      
      public function hide(param1:String) : void
      {
         var _loc2_:NewSeerIconView = this._icons.getValue(param1);
         if(Boolean(_loc2_) && Boolean(_loc2_.ui))
         {
            _loc2_.ui.visible = false;
         }
         else
         {
            this._hideArr.push(param1);
         }
      }
      
      public function show(param1:String) : void
      {
         var _loc2_:NewSeerIconView = this._icons.getValue(param1);
         if(Boolean(_loc2_) && Boolean(_loc2_.ui))
         {
            _loc2_.ui.visible = true;
         }
         else if(this._hideArr.indexOf(param1) != -1)
         {
            this._hideArr.splice(this._hideArr.indexOf(param1),1);
         }
      }
      
      public function showRightIcons() : void
      {
         IconController.eachIcon(function(param1:IconView):void
         {
            if(["right","right_side","right_bar"].indexOf(param1.direction) != -1)
            {
               if(param1.ui)
               {
                  param1.ui.y -= ICON_OFFSET;
               }
            }
         });
      }
   }
}
