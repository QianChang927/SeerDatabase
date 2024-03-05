package com.robot.core.cmd
{
   import com.robot.core.CommandID;
   import com.robot.core.info.transform.TransformInfo;
   import com.robot.core.manager.UserManager;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.skeleton.TransformSkeleton;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.SocketEvent;
   
   public class TransformCmdListener extends BaseBean
   {
       
      
      public function TransformCmdListener()
      {
         super();
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.PEOPLE_TRANSFROM,this.onTransform);
         finish();
      }
      
      private function onTransform(param1:SocketEvent) : void
      {
         var _loc4_:TransformSkeleton = null;
         var _loc2_:TransformInfo = param1.data as TransformInfo;
         var _loc3_:BasePeoleModel = UserManager.getUserModel(_loc2_.userID);
         if(_loc3_)
         {
            _loc3_.stop();
            _loc3_.info.changeShape = _loc2_.suitID;
            if(_loc2_.suitID == 0)
            {
               if(_loc4_ = _loc3_.skeleton as TransformSkeleton)
               {
                  _loc4_.untransform();
               }
            }
            else
            {
               _loc3_.skeleton = new TransformSkeleton();
            }
         }
      }
   }
}
