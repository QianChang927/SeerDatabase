package com.robot.app.mapProcess
{
   import com.robot.app.control.TreasureController;
   import com.robot.app.sceneInteraction.ArmShow;
   import com.robot.app.storage.FortressStorageController;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ArmManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import gs.TweenLite;
   import gs.easing.Expo;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class FortressMap extends BaseMapProcess
   {
       
      
      private var _storageIcon:SimpleButton;
      
      private var _editIcon:SimpleButton;
      
      private var _saveIcon:SimpleButton;
      
      private var _bookIcon:SimpleButton;
      
      private var _reallIcon:SimpleButton;
      
      private var _isEdieing:Boolean = false;
      
      private var _armShow:ArmShow;
      
      private var _bookPanel:AppModel;
      
      private var _infoPanel:AppModel;
      
      public function FortressMap()
      {
         super();
      }
      
      override protected function init() : void
      {
         var _loc1_:uint = 0;
         if(TreasureController.icon)
         {
            TreasureController.icon.visible = false;
         }
         this._armShow = new ArmShow();
         if(MainManager.actorInfo.teamInfo.id == MainManager.actorInfo.mapID)
         {
            _loc1_ = uint(MainManager.actorInfo.teamInfo.priv);
            if(_loc1_ == 0)
            {
               this.actorRoomInit();
            }
         }
      }
      
      override public function destroy() : void
      {
         if(TreasureController.icon)
         {
            TreasureController.icon.visible = true;
         }
         if(this._editIcon)
         {
            ToolTipManager.remove(this._editIcon);
            this._editIcon.removeEventListener(MouseEvent.CLICK,this.onEdie);
            DisplayUtil.removeForParent(this._editIcon);
            this._editIcon = null;
         }
         if(this._storageIcon)
         {
            ToolTipManager.remove(this._storageIcon);
            this._storageIcon.removeEventListener(MouseEvent.CLICK,this.onStorage);
            DisplayUtil.removeForParent(this._storageIcon);
            this._storageIcon = null;
         }
         if(this._bookIcon)
         {
            ToolTipManager.remove(this._bookIcon);
            this._bookIcon.removeEventListener(MouseEvent.CLICK,this.onBook);
            DisplayUtil.removeForParent(this._bookIcon);
            this._bookIcon = null;
         }
         if(this._saveIcon)
         {
            this._saveIcon.removeEventListener(MouseEvent.CLICK,this.onSave);
            ToolTipManager.remove(this._saveIcon);
            DisplayUtil.removeForParent(this._saveIcon);
            this._saveIcon = null;
         }
         if(this._isEdieing)
         {
            TweenLite.to(ToolBarController.panel,0.6,{
               "y":ToolBarController.panel.OLDY,
               "ease":Expo.easeOut
            });
         }
         if(this._bookPanel)
         {
            this._bookPanel.destroy();
            this._bookPanel = null;
         }
         if(this._infoPanel)
         {
            this._infoPanel.destroy();
            this._infoPanel = null;
         }
         if(this._reallIcon)
         {
            ToolTipManager.remove(this._reallIcon);
            this._reallIcon.removeEventListener(MouseEvent.CLICK,this.onReAll);
            DisplayUtil.removeForParent(this._reallIcon);
            this._reallIcon = null;
         }
         FortressStorageController.destroy();
         this._armShow.destroy();
         this._armShow = null;
         ModuleManager.destroy(ClientConfig.getAppModule("PetStorage"));
      }
      
      private function onInfo(param1:MouseEvent) : void
      {
         if(this._infoPanel != null)
         {
            this._infoPanel.destroy();
            this._infoPanel = null;
         }
         this._infoPanel = ModuleManager.getModule(ClientConfig.getAppModule("TeamAdminPanel"),"正在打开战队资料...");
         this._infoPanel.init(MainManager.actorInfo.mapID);
         this._infoPanel.show();
      }
      
      private function actorRoomInit() : void
      {
         this._bookIcon = UIManager.getButton("UI_Arm_Book_Icon");
         LevelManager.iconLevel.addChild(this._bookIcon);
         DisplayUtil.align(this._bookIcon,null,AlignType.MIDDLE_RIGHT,new Point(-10,-50));
         ToolTipManager.add(this._bookIcon,"要塞手册");
         this._bookIcon.addEventListener(MouseEvent.CLICK,this.onBook);
         this._editIcon = UIManager.getButton("UI_Arm_Edit_Icon");
         LevelManager.iconLevel.addChild(this._editIcon);
         DisplayUtil.align(this._editIcon,null,AlignType.MIDDLE_RIGHT,new Point(-10,5));
         ToolTipManager.add(this._editIcon,"设置要塞");
         this._editIcon.addEventListener(MouseEvent.CLICK,this.onEdie);
         this._storageIcon = UIManager.getButton("UI_Arm_Storage_Icon");
         ToolTipManager.add(this._storageIcon,"要塞仓库");
         this._storageIcon.addEventListener(MouseEvent.CLICK,this.onStorage);
         this._armShow.getAllInfoForServer();
      }
      
      private function onBook(param1:MouseEvent) : void
      {
         if(this._bookPanel == null)
         {
            this._bookPanel = ModuleManager.getModule(ClientConfig.getBookModule("TeamBook"),"正在打开要塞手册...");
         }
         this._bookPanel.show();
      }
      
      private function onEdie(param1:MouseEvent) : void
      {
         this._isEdieing = true;
         this._bookIcon.alpha = 0.4;
         this._bookIcon.mouseEnabled = false;
         this._armShow.openDrag();
         this._storageIcon.x = this._editIcon.x;
         this._storageIcon.y = this._editIcon.y;
         LevelManager.iconLevel.addChild(this._storageIcon);
         DisplayUtil.removeForParent(this._editIcon);
         if(this._reallIcon == null)
         {
            this._reallIcon = UIManager.getButton("UI_Arm_ReAll_Icon");
            this._reallIcon.x = this._storageIcon.x + 2;
            this._reallIcon.y = this._storageIcon.y + this._storageIcon.height + 10;
         }
         ToolTipManager.add(this._reallIcon,"重置");
         this._reallIcon.addEventListener(MouseEvent.CLICK,this.onReAll);
         LevelManager.iconLevel.addChild(this._reallIcon);
         if(this._saveIcon == null)
         {
            this._saveIcon = UIManager.getButton("UI_Arm_Save_Icon");
            this._saveIcon.x = this._reallIcon.x + 2;
            this._saveIcon.y = this._reallIcon.y + this._reallIcon.height + 10;
         }
         ToolTipManager.add(this._saveIcon,"保存设置");
         this._saveIcon.addEventListener(MouseEvent.CLICK,this.onSave);
         LevelManager.iconLevel.addChild(this._saveIcon);
         TweenLite.to(ToolBarController.panel,0.6,{
            "y":MainManager.getStageHeight() + 90,
            "ease":Expo.easeOut
         });
         this.onStorage(null);
      }
      
      private function onStorage(param1:MouseEvent) : void
      {
         FortressStorageController.show();
         ArmManager.storagePanel = FortressStorageController.panel;
      }
      
      private function onSave(param1:MouseEvent) : void
      {
         this._isEdieing = false;
         this._bookIcon.alpha = 1;
         this._bookIcon.mouseEnabled = true;
         this._armShow.closeDrag();
         LevelManager.iconLevel.addChild(this._editIcon);
         DisplayUtil.removeForParent(this._storageIcon);
         if(this._saveIcon)
         {
            this._saveIcon.removeEventListener(MouseEvent.CLICK,this.onSave);
            ToolTipManager.remove(this._saveIcon);
            DisplayUtil.removeForParent(this._saveIcon);
            this._saveIcon = null;
         }
         if(this._reallIcon)
         {
            ToolTipManager.remove(this._reallIcon);
            this._reallIcon.removeEventListener(MouseEvent.CLICK,this.onReAll);
            DisplayUtil.removeForParent(this._reallIcon);
            this._reallIcon = null;
         }
         FortressStorageController.hide();
         TweenLite.to(ToolBarController.panel,0.6,{
            "y":ToolBarController.panel.OLDY,
            "ease":Expo.easeOut
         });
         ArmManager.saveInfo();
      }
      
      private function onReAll(param1:MouseEvent) : void
      {
         ArmManager.removeAllInMap();
      }
   }
}
